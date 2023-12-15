import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/components/menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [
    {
      route: "/acolhido/novo",
      name: "Adicionar Acolhido"
    },
    {
      route: "/acolhido",
      name: "Listar Acolhidos"
    },
    {
      route: "/usuarios",
      name: "Lista Usuários"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
