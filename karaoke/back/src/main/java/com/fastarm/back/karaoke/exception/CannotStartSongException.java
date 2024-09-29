package com.fastarm.back.karaoke.exception;

import com.fastarm.back.common.exception.CustomException;

public class CannotStartSongException extends CustomException {
    public CannotStartSongException() {
        super(KaraokeExceptionConstants.CANNOT_NOT_START_SONG);
    }
}
