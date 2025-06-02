package com.entornos.book.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "Mi API",
                version = "1.0"
        ),
        servers = {
                @Server(url = "http://localhost:8088/api/v1")
        }
)
public class OpenApiConfig {
}
