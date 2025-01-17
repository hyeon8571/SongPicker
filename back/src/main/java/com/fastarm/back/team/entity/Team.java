package com.fastarm.back.team.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 32)
    private String name;

    @Column(name = "team_image", length = 256)
    private String teamImage;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "team")
    List<TeamMember> teamMembers = new ArrayList<>();

    public void changeTeamName(String newName) {
        this.name = newName;
    }
    public void changeTeam(String name, String teamImage){
        this.name = name;
        this.teamImage = teamImage;
    }

    @Builder
    public Team(String name, String teamImage){
        this.name = name;
        this.teamImage = teamImage;
    }

}
