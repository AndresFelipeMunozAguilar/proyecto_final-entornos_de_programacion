package com.entornos.book.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class RegistrationRequest {

    @NotNull(message = "First name is required")
    @NotBlank(message = "First name must not be blank")
    private String firstName;

    @NotNull(message = "Last name is required")
    @NotBlank(message = "Last name must not be blank")
    private String lastName;

    @Email(message = "Email format is invalid. Example: username@domain.com")
    @NotNull(message = "Email is required")
    @NotBlank(message = "Email must not be blank")
    private String email;

    @Size(min = 8, message = "Password must be at least 8 characters long")
    @NotNull(message = "Password is required")
    @NotBlank(message = "Password must not be blank")
    private String password;

}
