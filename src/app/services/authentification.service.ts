import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  user$: Observable<any>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user$ = this.angularFireAuth.authState;
   } 

  signIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.router.navigate(['scanner']);
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



}
