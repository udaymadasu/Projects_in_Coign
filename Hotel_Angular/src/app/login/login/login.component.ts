import { Component, OnInit } from '@angular/core';

import { Router ,Route} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
  Username !: any;
  Password !: any;
//    loginForm:any;
//   ngOnInit(): void {
// this.loginForm=this.data.group({'Username':['',[Validators.required]],
// 'Password':['',[Validators.required]]})
//   }
 

  constructor(private routes : Router) { }
    OnSubmit(){
    if(this.Username == "uday" && this.Password == "123"){
   this.routes.navigate(['Admin']);

    }
  }
ngOnInit(): void {
    
}


}
