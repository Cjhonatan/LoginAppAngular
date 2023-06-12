import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private authToken?:string;
  private userEmail: any;
  constructor(private http: HttpClient) {}

  login(email:string, password:string):void {
    const loginUrl = `${this.apiUrl}/login`
    const formData = {
      email: email,
      password: password
    }
    this.http.post(loginUrl, formData, {headers:this.getAuthHeaders()})
    .subscribe(
      (response:any) => {
        // this.authToken = response.accessToken;
        localStorage.setItem("token", response.token)
        console.log("response: ", response);
        this.userEmail = formData.email;
      },
      (error) => {
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
            console.log("Error: ", error.error.message);
          }
        else {
          console.error(`codigo de error ${error.status}` + `mensaje: ${error.error}`)
        }
        }
      }
    )
  }

  create(username:string, email:string, password:string):void{
    const createUrl = `${this.apiUrl}/create`
    const formData = {
      username: username,
      email: email,
      password: password,
    }
    this.http.post(createUrl,formData).subscribe(
      (response:any) => {
        console.log("Registro exitoso ", response);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  private getAuthHeaders():HttpHeaders{
    const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders({"Autorization":`Bearer ${authToken}`});
    return headers;
  }


  getUser(){
    const getUrl = `${this.apiUrl}/${this.userEmail}`;
    return this.http.get(getUrl);
    
  }
}
