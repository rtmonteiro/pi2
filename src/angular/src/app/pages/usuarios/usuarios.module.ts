import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsuarioItemComponent } from "src/app/components/usuario-item/usuario-item.component";
import { UsuarioComponent } from "../usuario/usuario.component";
import { UsuariosComponent } from "./usuarios.component";

@NgModule({
  declarations: [
    UsuarioItemComponent,
    UsuariosComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsuariosModule {
}