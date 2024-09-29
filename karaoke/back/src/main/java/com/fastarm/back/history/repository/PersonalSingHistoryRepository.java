package com.fastarm.back.history.repository;

import com.fastarm.back.history.entity.PersonalSingHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalSingHistoryRepository extends JpaRepository<PersonalSingHistory,Long> {
}
