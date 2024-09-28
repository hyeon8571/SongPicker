package com.fastarm.back.notification.service;

import com.fastarm.back.member.entity.Member;
import com.fastarm.back.member.exception.MemberNotFoundException;
import com.fastarm.back.member.repository.MemberRepository;
import com.fastarm.back.notification.dto.TeamInviteNotificationDto;
import com.fastarm.back.notification.entity.NotificationTeamInvite;
import com.fastarm.back.notification.exception.AlreadyInviteException;
import com.fastarm.back.notification.repository.NotificationTeamInviteRepository;
import com.fastarm.back.team.entity.Team;
import com.fastarm.back.team.entity.TeamMember;
import com.fastarm.back.team.repository.TeamMemberRepository;
import com.fastarm.back.notification.exception.TeamInviteNotificationNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final TeamMemberRepository teamMemberRepository;
    private final NotificationTeamInviteRepository notificationTeamInviteRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public void RespondTeamInvitation(TeamInviteNotificationDto dto){
        NotificationTeamInvite notificationInvite = notificationTeamInviteRepository.findById(dto.getNotificationId())
                .orElseThrow(TeamInviteNotificationNotFoundException::new);

        if(dto.getAccept() != null && dto.getAccept()){
            notificationInvite.accept();

            Team team = notificationInvite.getTeam();
            Member member = memberRepository.findByLoginId(dto.getLoginId())
                    .orElseThrow(MemberNotFoundException::new);

            boolean alreadyExists = teamMemberRepository.existsByTeamAndMember(team,member);
            if (alreadyExists) {
                throw new AlreadyInviteException();
            }

            TeamMember teamMember = TeamMember.builder()
                    .member(member)
                    .team(team)
                    .build();

            teamMemberRepository.save(teamMember);
        } else {
            notificationInvite.reject();
        }

        notificationTeamInviteRepository.save(notificationInvite);
    }

}