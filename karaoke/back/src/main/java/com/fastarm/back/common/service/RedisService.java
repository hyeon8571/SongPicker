package com.fastarm.back.common.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RedisService {

    private final RedisTemplate<String, Object> redisTemplate;

    public List<Object> getListData(String key) {
        return redisTemplate.opsForList().range(key, 0, -1);
    }

    public void deleteData(String key) {
        redisTemplate.delete(key);
    }

}
