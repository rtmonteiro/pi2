import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './pages/login/login.module';
import { AcolhidoModule } from './pages/acolhido/acolhido.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AcolhidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
