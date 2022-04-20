import { Injectable } from '@angular/core';
import { User } from '../shared/Iuser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  

  constructor(private http: HttpClient) {
  }
    
  login(email:string, password:string ) {
      return this.http.post<User>('https://ds-test-api.herokuapp.com/api/login', {email, password})
  }


}
