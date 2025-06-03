import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  public set token(token: string) {
    localStorage.setItem('token', token);
  }


  public get token(): string {
    return localStorage.getItem('token') as string;
  }


  // TODO : IMPLEMENTAR EL JWTHELPETSERVICE PARA QUE FUNCIONE
  isTokenValid() {

    const token = this.token;
    if (!token) {

      return false;

    }

    // decode the token
    const jwtHelper = new JwtHelperService();
    // check expiry date
    const isTokenExpired = jwtHelper.isTokenExpired(token);

    if (isTokenExpired) {

      localStorage.clear();
      return false;

    }
    return true;

  }

  // TODO : IMPLEMENTAR EL JWTHELPETSERVICE PARA QUE FUNCIONE
  isTokenNotValid() {

    return !this.isTokenValid();

  }

  // TODO : IMPLEMENTAR EL JWTHELPETSERVICE PARA QUE FUNCIONE
  get userRoles(): string[] {

    const token = this.token;

    if (token) {

      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(token);
      console.log(decodedToken.authorities);
      return decodedToken.authorities;

    }
    return [];

  }

}
