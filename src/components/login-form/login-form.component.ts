import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputValidatorService } from '../../services/input-validator/input-validator.service';
// import * as jQuery from 'jquery';

 declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private http: HttpClient, 
               private validator: InputValidatorService) { }

  username = '';
  password = '';

  ngOnInit() {
  }

  loginUser() {
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);

    if (this.validator.isValid(this.username) === true && this.validator.isValid(this.password) === true ) {

        const headers = new HttpHeaders()
              .set('Authorization', 'my-auth-token')
              .set('Content-Type', 'application/json');
        this.http.get('http://127.0.0.1:3000/login/loginRequest/' + this.username + '/' + this.password)
        .subscribe(data => {
          console.log(data);
          if (data === 'success login') {
            this.user.setUsername(this.username);
            this.user.setUserStatus("loggedIn");
            this.router.navigate(['/home']);
          }
          else
            if(data === 'fail login'){
              // $("#failModalText").html(this.EN.EN_1);
              $("#failModalText").html("Credentials don't match");
              $('#failModal').modal('show');
            }
        });

      
    }
    else {
      console.log('invalid account');
      $("#failModalText").html("Incorrectly filled input fields");
      $('#failModal').modal('show'); 
    }
  }

}
