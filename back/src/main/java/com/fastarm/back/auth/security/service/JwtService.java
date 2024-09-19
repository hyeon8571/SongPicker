package com.fastarm.back.auth.security.service;

import com.fastarm.back.auth.exception.RefreshAuthenticationException;
import com.fastarm.back.auth.security.entity.RefreshToken;
import com.fastarm.back.auth.security.util.JwtUtil;
import com.fastarm.back.common.constants.JwtConstants;
import com.fastarm.back.common.service.RedisService;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final RedisService redisService;

    public void saveRefreshToken(RefreshToken refreshToken) {
        redisService.setData(generatePrefixedKey(refreshToken.getLoginId()), refreshToken.getRefreshToken(), JwtConstants.REFRESH_EXPIRED);
    }

    public void reissueAccess(HttpServletRequest request, HttpServletResponse response) {
        String refreshToken = null;
        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("refresh")) {
                    refreshToken = cookie.getValue();
                    break;
                }
            }
        }

        if (refreshToken == null) {
            throw new RefreshAuthenticationException();
        }

        try {
            JwtUtil.isExpired(refreshToken);
        } catch (ExpiredJwtException e) {
            throw new RefreshAuthenticationException();
        }

        String loginId = JwtUtil.getLoginId(refreshToken);

        if (redisService.getData(generatePrefixedKey(loginId)) == null) {
            throw new RefreshAuthenticationException();
        }

        String role = JwtUtil.getRole(refreshToken);

        String newAccess = JwtUtil.createJwt("access", loginId, role, JwtConstants.ACCESS_EXPIRED);
        String newRefresh = JwtUtil.createJwt("refresh", loginId, role, JwtConstants.REFRESH_EXPIRED);

        RefreshToken newRefreshToken = RefreshToken.builder()
                .loginId(loginId)
                .refreshToken(refreshToken)
                .build();

        saveRefreshToken(newRefreshToken);

        response.setHeader("Authorization", "Bearer " + newAccess);
        response.addCookie(ResponseService.createCookie("refresh", newRefresh));
    }

    private String generatePrefixedKey(String key) {
        return JwtConstants.REFRESH_TOKEN + ":" + key;
    }

}