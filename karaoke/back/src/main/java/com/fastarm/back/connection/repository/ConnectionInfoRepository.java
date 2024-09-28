package com.fastarm.back.connection.repository;

import com.fastarm.back.connection.entity.ConnectionInfo;
import com.fastarm.back.karaoke.entity.Machine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConnectionInfoRepository extends JpaRepository<ConnectionInfo, Long> {
    List<ConnectionInfo> findByMachine(Machine machine);
}
