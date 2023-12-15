import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserResponse } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = environment.BASE_URL
  
  constructor(
    public http: HttpClient
  ) { }

  login(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseURL}/User/login`, user)
      .pipe(tap((res: UserResponse) => {
        localStorage.setItem('accessToken', res.accessToken)
      }))
  }
}
