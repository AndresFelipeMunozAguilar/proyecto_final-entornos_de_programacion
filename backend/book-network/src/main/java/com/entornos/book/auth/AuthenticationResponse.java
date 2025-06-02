package com.entornos.book.auth;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
//BIEN MAPEADO
@Getter
@Setter
@Builder
public class AuthenticationResponse {

    private String token;

}
