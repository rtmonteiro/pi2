import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-selector',
  templateUrl: './form-selector.component.html',
  styleUrls: ['./form-selector.component.scss']
})
export class FormSelectorComponent implements OnInit {

  @Input() options: ISelectOption[];

  @Output() selected: EventEmitter<string | number>;

  selectedOption: ISelectOption;

  constructor() {
    this.options = new Array<ISelectOption>();
    this.selected = new EventEmitter();
    this.selectedOption = <ISelectOption>{name: '', value: 0};
  }

  ngOnInit(): void {
  }

  onChange(event: Event): void {
    const selected = event.target as HTMLSelectElement;
    this.selected.emit(selected.value)
  }

}

export interface ISelectOption {
  name: string;
  value: string | number;
}
