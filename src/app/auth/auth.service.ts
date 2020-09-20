import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { LoginDto } from '../models/loginDto';
import { UserResponseDto } from '../models/userResponseDto';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken;
  user: UserResponseDto;
  // isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')) || new DecodedToken();
   }

  public register(userData: any): Observable<any> {
    const URI = environment.baseUrl + '/Auth/register';
    return this.http.post(URI, userData);
  }

  public login(userData: any): Observable<any> {
    const URI = environment.baseUrl + '/Auth/authenticate';
    return this.http.post(URI, userData).pipe(map(token => {
      return this.saveToken(token);
    }));
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token.token);
    this.user = token;
    localStorage.setItem('auth_tkn', token.token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  public logout(): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');

    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    console.log(this.decodedToken.exp);
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }
}
