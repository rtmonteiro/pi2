import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcolhidosListComponent } from './pages/acolhidos-list/acolhidos-list.component';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AcolhidosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
