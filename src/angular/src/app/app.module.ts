import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './pages/login/login.module';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './pages/menu/menu.component';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { AcolhidoModule } from './pages/acolhido/acolhido.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UsuariosModule,
    AcolhidoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
