import { Component, OnInit } from '@angular/core';

import { ServService } from 'src/app/serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private email = "";
  private password = "";

  constructor(private service : ServService, private router : Router ) { }

  ngOnInit() {
  }

  // onClickLogin(){
  //   let usr = {
  //     "email": this.email,
  //     "password": this.password
  //   }

  //   this.service.login(usr).subscribe(responce => {
  //     console.log(responce);

  //     this.router.navigate(['/dashboard']);
  //   })
  // }
}
