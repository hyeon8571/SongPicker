package com.fastarm.back.common.service;

import com.fastarm.back.karaoke.controller.dto.GetReservationsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class RedisService {

    private final RedisTemplate<String, Object> redisTemplate;

    public void setData(String key, String field, Object value) {
        redisTemplate.opsForHash().put(key, field, value);
    }

    public void setData(String key, String field, Object value, int expired) {
        redisTemplate.opsForHash().put(key, field, value);
        redisTemplate.expire(key, expired, TimeUnit.MINUTES);
    }

    public List<Object> getReservations(String key, String field) {
        return (List<Object>) redisTemplate.opsForHash().get(key, field);
    }

    public void deleteData(String key) {
        redisTemplate.delete(key);
    }

}
