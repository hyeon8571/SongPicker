package com.fastarm.back.karaoke.service;

import com.fastarm.back.common.constants.RedisConstants;
import com.fastarm.back.common.service.RedisService;
import com.fastarm.back.karaoke.dto.ChargeDto;
import com.fastarm.back.karaoke.enums.ChargeType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KaraokeService {

    private final RedisService redisService;

    public void charge(ChargeDto chargeDto) {

        if (chargeDto.getType().equals(ChargeType.TIME.getValue())) {
            redisService.setData(RedisConstants.INFO + chargeDto.getSerialNumber(), RedisConstants.CHARGE_INFO, chargeDto, chargeDto.getRemaining());
        } else {
            redisService.setData(RedisConstants.INFO + chargeDto.getSerialNumber(), RedisConstants.CHARGE_INFO, chargeDto);
        }
    }

    public List<Object> findReservations(String serialNumber) {
        return redisService.getReservations(serialNumber, RedisConstants.RESERVATION_INFO);
    }

}
