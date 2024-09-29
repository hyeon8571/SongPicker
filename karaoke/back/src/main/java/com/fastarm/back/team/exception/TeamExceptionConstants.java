package com.fastarm.back.team.exception;

import com.fastarm.back.common.exception.ExceptionConstants;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum TeamExceptionConstants implements ExceptionConstants {
    TEAM_NOT_FOUND_EXCEPTION("TE001", "그룹 조회 실패", HttpStatus.BAD_REQUEST);

    final String code;
    private final String message;
    private final HttpStatus httpStatus;
}
