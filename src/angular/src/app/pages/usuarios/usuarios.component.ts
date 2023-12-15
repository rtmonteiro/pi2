import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserModel } from 'src/app/models/User';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  @Input() users!: IUserModel[];
  users$!: Observable<IUserModel[]>;

  constructor(
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.users$ = this.usuariosService.getUsers();
  }

  deleteUser($event: string) {
    this.usuariosService.deleteUser($event).subscribe(
      () => this.users$ = this.usuariosService.getUsers()
    );
  }

}
