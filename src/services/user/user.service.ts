import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  constructor() { }

  setUsername(user){
    localStorage.setItem("username", user);
  }

  setUserStatus(state){
    localStorage.setItem("userStatus", state);
  }

   getUsername() {
     return localStorage.getItem("username");
   }

   getUserStatus() {
    return localStorage.getItem("userStatus");
   }

}
