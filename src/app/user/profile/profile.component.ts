import { Component } from '@angular/core';
import { UserService } from 'src/app/servicies/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  selectFile?: File;
  userProfile: any;
  editValue:boolean=false;

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.getUser();
  
  }

  editProfile(){
    this.editValue=true;
  }

   getUser(){
    this.userService.getUser().subscribe(
      (response:any) => {
        console.log("response: ",response);
        console.log("profile desde comp: ",response);
        this.userProfile = response;
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  cancelUpdate(){
    this.editValue=false;
  }

  onFileSelected(event:any){
    this.selectFile = event.target.files[0];
  }
}
