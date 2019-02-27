import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }

  registerUser(user) {
    console.log('getUser request started!');
    return this.http.post('http://localhost:8080/NewCrud/newslim/public/api/customer/add', user);
  }
  

  getUsers() {
    console.log('getUser request started!');
    return this.http.get('http://localhost:8080/NewCrud/newslim/public/api/customers');
    // return this.http.get('https://reqres.in/api/users');
  }

  deleteUser(username) {
    console.log('getUser request started!');
    return this.http.delete('http://localhost:8080/NewCrud/newslim/public/api/customer/delete/' + username);
  }

  updateUser(id,user){
    console.log('Updating User');
    return this.http.put('http://localhost:8080/NewCrud/newslim/public/api/customer/update/'+ id , user);
  }
}


