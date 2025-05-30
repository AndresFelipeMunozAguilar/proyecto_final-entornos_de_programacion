package com.entornos.book.auth;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthenticationService authService;

    @PostMapping("register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> register(
            @RequestBody @Valid RegistrationRequest regRequest) throws MessagingException {

        authService.register(regRequest);

        return ResponseEntity.accepted().build();

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody @Valid AuthenticationRequest request) {

        return ResponseEntity.ok(authService.authenticate(request));

    }

}
