import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-ninios',
  templateUrl: './ninios.component.html',
  styleUrls: ['./ninios.component.css']
})
export class NiniosComponent {
@Input()title?: string
}
