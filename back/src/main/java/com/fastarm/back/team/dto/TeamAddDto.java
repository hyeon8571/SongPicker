package com.fastarm.back.team.dto;

import com.fastarm.back.team.entity.Team;
import com.fastarm.back.team.validation.annotation.TeamName;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Builder
public class TeamAddDto {
    @TeamName
    private String teamName;
    private MultipartFile teamImage;
    private String loginId;

    public Team toEntity(String imagePath){
        return Team.builder()
                .name(teamName)
                .teamImage(imagePath)
                .build();
    }
}
