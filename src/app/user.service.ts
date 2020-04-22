import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  idToken = localStorage.getItem('idToken');

  constructor(private http: HttpClient) { }

  getUserProfile(userId: string){ 
    var headers = this.getHeader();
    console.log("Headers: ", headers);

    if(userId =='me'){
      return this.http.get(environment.API_BASE_URL + "users/me", {headers});
    }
    else{
      let params = new HttpParams();
      params = params.append('email', userId);
      return this.http.get(environment.API_BASE_URL + "users", {params: params, headers:headers});
    }
    
  }

  makeProfilePhoto(photoUrl: string){
    var headers = this.getHeader();
    
    const params = new HttpParams()
    .set('photoUrl', photoUrl);
    return this.http.put(environment.API_BASE_URL + "/users/me/profilePhoto", params, {headers});
 
  }

  getHeader(){
    var headers = {
      'idToken': this.idToken
    };
    return headers;
  }
}