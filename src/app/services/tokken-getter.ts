import { Injectable } from '@angular/core';
@Injectable()
export class TokenGetter {
  public getToken(): any {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return (false || token);
  }
  
}