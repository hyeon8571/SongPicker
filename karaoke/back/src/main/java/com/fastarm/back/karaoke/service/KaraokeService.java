package com.fastarm.back.karaoke.service;

import com.fastarm.back.common.constants.KaraokeRedisConstants;
import com.fastarm.back.common.service.RedisService;
import com.fastarm.back.karaoke.controller.dto.GetReservationsResponse;
import com.fastarm.back.karaoke.dto.ChargeDto;
import com.fastarm.back.karaoke.enums.ChargeType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class KaraokeService {

    private final RedisService redisService;

    public void charge(ChargeDto chargeDto) {

        if (chargeDto.getType().equals(ChargeType.TIME.getValue())) {
            redisService.setData(chargeDto.getSerialNumber(), KaraokeRedisConstants.CHARGE_INFO, chargeDto, chargeDto.getCharge());
        } else {
            redisService.setData(chargeDto.getSerialNumber(), KaraokeRedisConstants.CHARGE_INFO, chargeDto);
        }
    }

    public List<Object> findReservations(String serialNumber) {
        return redisService.getReservations(serialNumber, KaraokeRedisConstants.RESERVATION_INFO);
    }

}
