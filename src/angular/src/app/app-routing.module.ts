import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AcolhidosListComponent } from './pages/acolhido/acolhidos-list/acolhidos-list.component';
import { AcolhidoCreateComponent } from './pages/acolhido/acolhido-create/acolhido-create.component';

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
    path: 'login',
    component: LoginComponent
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
