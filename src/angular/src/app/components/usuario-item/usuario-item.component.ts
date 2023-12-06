import { Component, Input, OnInit } from '@angular/core';
import { IUserModel } from 'src/app/models/User';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.scss']
})
export class UsuarioItemComponent implements OnInit {

  @Input() user!: IUserModel

  constructor() { }

  ngOnInit(): void {
  }

}
