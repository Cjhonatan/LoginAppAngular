import { Component } from '@angular/core';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  username!:string;
  password!:string;
  email!:string;
  constructor(private userService:UserComponent ){

  }

  createUser(){
    //this.userService.create()

  }

}
