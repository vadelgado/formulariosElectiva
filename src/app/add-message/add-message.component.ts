import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent {

  constructor(public messageService: MessageService){

  }

  message:string='';

  addMessage() {
    this.messageService.add(this.message);
    this.message='';
  }



}
