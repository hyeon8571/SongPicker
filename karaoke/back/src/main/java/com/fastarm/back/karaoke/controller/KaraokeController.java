package com.fastarm.back.karaoke.controller;

import com.fastarm.back.common.controller.dto.ApiResponse;
import com.fastarm.back.karaoke.dto.ChargeDto;
import com.fastarm.back.karaoke.service.KaraokeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/karaoke")
@RequiredArgsConstructor
public class KaraokeController {

    private final KaraokeService karaokeService;

    @PostMapping("/charge")
    public ResponseEntity<?> charge(@RequestBody ChargeDto chargeDto) {
        karaokeService.charge(chargeDto);
        return ResponseEntity.ok(new ApiResponse<>("KA100", "노래방 결제 성공", null));
    }

    @GetMapping("/reservations")
    public ResponseEntity<?> reservationList(@RequestParam("serialNumber") String serialNumber) {
        List<Object> result = karaokeService.findReservations(serialNumber);
        return ResponseEntity.ok(new ApiResponse<>("KA101", "예약 리스트 조회 성공", result));
    }
}
