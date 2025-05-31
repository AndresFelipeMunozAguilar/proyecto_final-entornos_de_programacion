package com.entornos.book.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.LockedException;

public class GlobalExceptionHandler {

    public ResponseEntity<ExceptionResponse> handleException(LockedException exp) {

    }

}
