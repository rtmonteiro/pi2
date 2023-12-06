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
      route: "/acolhidos",
      name: "Acolhidos"
    },
    {
      route: "/usuarios",
      name: "Lista Usuários"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
