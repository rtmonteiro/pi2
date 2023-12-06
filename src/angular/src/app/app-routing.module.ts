import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AcolhidosListComponent } from './pages/acolhidos-list/acolhidos-list.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path: "acolhido",
    component: AcolhidosListComponent
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
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
