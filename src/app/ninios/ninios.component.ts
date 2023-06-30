import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-ninios',
  templateUrl: './ninios.component.html',
  styleUrls: ['./ninios.component.css'],
})
export class NiniosComponent {
  @Input() title?: string;

  @Output() titleChange= new EventEmitter<string>();

  emitTitleChangue() {
    // console.log(this.title);

    this.titleChange.emit(this.title);

  }
}
