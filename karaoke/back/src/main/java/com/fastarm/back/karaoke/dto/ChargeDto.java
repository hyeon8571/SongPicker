package com.fastarm.back.karaoke.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChargeDto {
    private String serialNumber;
    private String type;
    private int charge;
}
