import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/serv.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users : object;
  private usersObservable : Observable<any[]>;

  constructor(private service : ServService, router : Router) { }

  ngOnInit() {
    this.getUsersFromService();
  }

  private first_name='';
  private last_name='';
  private id;

  private getUsersFromService(){
    this.service.getUsers().subscribe(data => {
      console.log('getUsers request completed!');
      
      this.users = data;
      console.log(this.users);
    })
  }

  onClickRefreshList(){
    this.getUsersFromService()
  }

  onClickDeleteUser(username){
    console.log("Deleting user "+ username);
    this.service.deleteUser(username).subscribe(response => {
      console.log(response);
      this.users = [];
      this.getUsersFromService();
    })
  }

  onClickEditUser(id,first_name,last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.id = id;
    
    console.log(id + first_name + last_name);
  }

  updateData(){
    let data = {
      "first_name" : this.first_name,
      "last_name" : this.last_name
    }
    this.service.updateUser(this.id,data).subscribe(response => {
      console.log(response);
      this.getUsersFromService();
    })
    
  }
}
