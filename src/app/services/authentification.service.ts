import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) 
        localStorage.setItem('user', JSON.stringify(user));
    })
  } 

  signIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['scanner']);
      });
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  signOut() {
    return this.angularFireAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })
  }

  get isLoggedIn(): boolean {
    let user: any = localStorage.getItem('user');
    if (user) 
      user = JSON.parse(user);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

}
