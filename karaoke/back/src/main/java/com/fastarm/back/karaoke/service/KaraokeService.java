package com.fastarm.back.karaoke.service;

import com.fastarm.back.common.constants.RedisConstants;
import com.fastarm.back.common.service.RedisService;
import com.fastarm.back.karaoke.dto.ChargeDto;
import com.fastarm.back.karaoke.entity.Machine;
import com.fastarm.back.karaoke.exception.NotFoundMachineException;
import com.fastarm.back.karaoke.repository.MachineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KaraokeService {

    private final MachineRepository machineRepository;
    private final RedisService redisService;

    @Transactional
    public void charge(ChargeDto chargeDto) {

        Machine machine = machineRepository.findBySerialNumber(chargeDto.getSerialNumber())
                .orElseThrow(NotFoundMachineException::new);

        machine.chargeCoin(chargeDto.getRemaining());
    }

    public List<Object> findReservations(String serialNumber) {
        return redisService.getList(RedisConstants.RESERVATION_INFO + serialNumber);
    }

    public void findRecommendations(String serialNumber) {

    }

}
