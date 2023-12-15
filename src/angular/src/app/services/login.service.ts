import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    const headers = new HttpHeaders()

    return this.http.post<UserResponse>(`${this.baseURL}/login`, user, {
      headers
    })
  }
}
