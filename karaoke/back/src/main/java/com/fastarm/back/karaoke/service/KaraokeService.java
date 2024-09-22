package com.fastarm.back.karaoke.service;

import com.fastarm.back.common.constants.KaraokeRedisConstants;
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
            redisService.setData(KaraokeRedisConstants.CHARGE_INFO + chargeDto.getSerialNumber(), chargeDto, chargeDto.getCharge());
        } else {
            redisService.setData(KaraokeRedisConstants.CHARGE_INFO + chargeDto.getSerialNumber(), chargeDto);
        }
    }

    public List<Object> findReservations(String serialNumber) {
        return redisService.getReservations(KaraokeRedisConstants.RESERVATION_INFO + serialNumber);
    }

}
