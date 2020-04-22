import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;

  //Get IdToken from Firebase User:
  console.log("I am inside the auth constructor");

	this.userData.subscribe(
    //user => console.log("idToken:", user.getIdToken()),
    user => this.storeIdToken(user.getIdToken()),
    err => console.error('UserData got an error: ' + err),
    () => console.log('UserData got a complete notification')
  );
  console.log("I am done with things in the auth constructor");

  }

  checkAuthState(){
    this.userData = this.angularFireAuth.authState;
    
    this.userData.subscribe(
      //user => console.log("idToken:", user.getIdToken()),
      user => this.storeIdToken(user.getIdToken()),
      err => console.error('UserData got an error: ' + err),
      () => console.log('UserData got a complete notification')
    );
  }

  storeIdToken(idToken){
    idToken.then( value => { 
      localStorage.setItem('idToken', value); 
 });
 
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!', res );
        this.checkAuthState();
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
      this.router.navigateByUrl('/home');
      
  }

  /* Sign out */
  SignOut() {

    localStorage.clear();

    this.angularFireAuth
      .auth
      .signOut();
      //localStorage.setItem('idToken', '');

    this.router.navigateByUrl('/logout');
    //location.reload();

    //this.router.navigateByUrl('', { skipLocationChange: false });

  }  

}
