import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IUserCreate, IUserModel } from '../models/User';
import { environment } from 'src/environments/environment';

export interface IUsuario {
  id: string
  userName: string
  normalizedUserName: string
  email: string
  normalizedEmail: string
  emailConfirmed: boolean
  passwordHash: string
  securityStamp: string
  concurrencyStamp: string
  phoneNumber: any
  phoneNumberConfirmed: boolean
  twoFactorEnabled: boolean
  lockoutEnd: any
  lockoutEnabled: boolean
  accessFailedCount: number
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = environment.BASE_URL

  userList: IUserModel[] = []

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<IUserModel[]> {
    return this.http.get<IUserModel[]>(this.baseUrl+'/User')
      .pipe(map((response: any) => response.map((user: IUsuario) => {
        return {
          id: user.id,
          email: user.email,
          name: user.userName,
          password: user.passwordHash,
        } as IUserModel;
      })))
      .pipe(tap(users => this.userList = users));
  }

  getUser(id: string): IUserCreate {
    const userModel = this.userList.find(user => user.id === id)

    return {
      email: userModel?.email ?? '',
    } as IUserCreate
  }

  saveUser(user: IUserCreate) {
    return this.http.post(this.baseUrl+'/User/cadastro', user);
  }

  updateUser(user: IUserCreate) {
    return this.http.post(this.baseUrl+'/User/update', user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl+'/User/delete/'+id);
  }
}
