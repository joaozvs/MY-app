import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isError = false;
  isSuccess = false;

  user = ""
  pwd = ""

  login(){
    if(this.user == "joao" && this.pwd == "JOAO"){
      this.isSuccess = true
      this.isError = false
      console.log("Login aprovado")
      // redirecionar p alguma página
    } else {
      this.isError = true;
      this.isSuccess = false;
    }
    // console.log("User = " + this.user + " Password = " + this.pwd)
  }


  // user = beto@beto.com.br e password = beto {
  //   // login
  // } else {
  //   isError = true;
  // }

}
