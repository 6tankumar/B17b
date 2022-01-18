import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://bookcart.azurewebsites.net/api/user/validateUserName'

constructor(private http : HttpClient) { }

userNameAvail(Name : any)  {
  this.url = 'https://bookcart.azurewebsites.net/api/user/validateUserName/' + Name
  return this.http.get(this.url)
}

}
