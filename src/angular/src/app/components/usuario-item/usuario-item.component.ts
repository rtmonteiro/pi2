import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUserModel } from 'src/app/models/User';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.scss']
})
export class UsuarioItemComponent implements OnInit {
  
  @Input() user!: IUserModel

  @Output() deleteUserEvent = new EventEmitter<string>();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  deleteUser(id: string) {
    this.deleteUserEvent.emit(id);
  }
}
