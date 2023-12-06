import { Component, Input, OnInit } from '@angular/core';

export interface MenuItem {
  route: string,
  name: string
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  item!: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
