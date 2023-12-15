import { NgModule } from "@angular/core";
import { AcolhidosListComponent } from "./acolhidos-list.component";
import { AcolhidoComponent } from "../acolhido/acolhido.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        AcolhidosListComponent,
        AcolhidoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class AcolhidosModule {}
