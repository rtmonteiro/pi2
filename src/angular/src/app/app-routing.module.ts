import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AcolhidosListComponent } from './pages/acolhido/acolhidos-list/acolhidos-list.component';
import { AcolhidoCreateComponent } from './pages/acolhido/acolhido-create/acolhido-create.component';
import { MenuComponent } from './pages/menu/menu.component';
import { UsuarioComponent } from './pages/usuario/usuario.component'
import { UsuariosComponent } from './pages/usuarios/usuarios.component'

const routes: Routes = [
  {
    path: 'acolhido',
    component: AcolhidosListComponent
  },
  {
    path: 'acolhido/novo',
    component: AcolhidoCreateComponent
  },
  {
    path: "menu",
    component: MenuComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        component: UsuariosComponent
      },
      {
        path: ':id',
        component: UsuarioComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
