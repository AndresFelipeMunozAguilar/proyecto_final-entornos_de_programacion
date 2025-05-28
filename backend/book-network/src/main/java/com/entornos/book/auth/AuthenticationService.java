package com.entornos.book.auth;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.entornos.book.role.RoleRepository;
import com.entornos.book.token.Token;
import com.entornos.book.token.TokenRepository;
import com.entornos.book.user.User;
import com.entornos.book.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    public void register(RegistrationRequest regRequest) {

        var userRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new IllegalStateException("User role not initialized"));
        // Create better exception handling

        var user = User.builder()
                .firstName(regRequest.getFirstName())
                .lastName(regRequest.getLastName())
                .email(regRequest.getEmail())
                .password(passwordEncoder.encode(regRequest.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(userRole))
                .build();

        userRepository.save(user);

        sendValidationEmail(user);

    }

    private void sendValidationEmail(User user) {

        var newToken = generateAndSaveValidationToken(user);

    }

    private String generateAndSaveValidationToken(User user) {

        String generatedToken = generateActivationCode(6);

        var token = Token.builder()
                .token(generatedToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(15))
                .user(user)
                .build();

        tokenRepository.save(token);
        return generatedToken;
    }

    private String generateActivationCode(int length) {

        String characters = "0123456789";

        StringBuilder codeBuilder = new StringBuilder();

        SecureRandom secureRandom = new SecureRandom();
        for (int i = 0; i < length; i++) {
            int randomIndex = secureRandom.nextInt(characters.length());
            codeBuilder.append(characters.charAt(randomIndex));
        }

        for (int i = 0; i < length; i++) {

            // Este indice genera valores entre 0 y 9
            int randomIndex = secureRandom.nextInt(characters.length());

            codeBuilder.append(characters.charAt(randomIndex));
        }

        return codeBuilder.toString();
    }

}
