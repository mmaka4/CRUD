import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { ServService } from 'src/app/serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private first_name = "";
  private last_name = "";
  private phone = "";
  private email = "";
  private address = "";
  private city = "";
  private state = "";
  private password = "";


  constructor(private service : ServService, private router : Router ) { }

  ngOnInit() {
  }

  onClickRegister(){
    let usr = {
      "first_name": this.first_name,
      "last_name": this.last_name,
      "phone": this.phone,
      "email": this.email,
      "address": this.address,
      "city": this.city,
      "state": this.state,
      "password": this.password,
    }

    this.service.registerUser(usr).subscribe(responce => {
      console.log(responce);

      this.router.navigate(['/dashboard']);
    })
  }

}
