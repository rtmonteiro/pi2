import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUserModel } from '../models/User';

export interface IUsuario {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  password?: string;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<IUserModel[]> {
    return this.http.get<IUserModel[]>('https://reqres.in/api/users')
      .pipe(map((response: any) => response.data.map((user: IUsuario) => {
        return {
          id: user.id.toString(),
          email: user.email,
          avatar: user.avatar,
          name: `${user.first_name} ${user.last_name}`,
          password: '',
        } as IUserModel;
      })));
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`https://reqres.in/api/users/${id}`);
  }
}
