import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { IUserCreate, IUserModel } from 'src/app/models/User';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  user!: IUserCreate;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService,
  ) {
    this.route.params
      .pipe(tap(({id}) => {
        this.id = id;
        this.user = this.usuariosService.getUser(id);
      }))
      .subscribe();
  }

  ngOnInit(): void {
  }

  save() {
    if (this.id != '0') {
      this.usuariosService.updateUser(this.user).subscribe({
        complete: () => this.router.navigate(['usuarios']),
      });
      return;
    }
    this.usuariosService.saveUser({
      email: this.user.email,
      password: this.user.password,
      passwordConfimation: this.user.password,
    }).subscribe({
      complete: () => this.router.navigate(['usuarios']),
    });
  }
  
  cancel() {
    this.router.navigate(['usuarios']);
  }
}
