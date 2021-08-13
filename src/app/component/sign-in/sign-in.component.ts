import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const email:string = form.value['email'];
    const password:string = form.value['password'];
    this.authService.signIn(email, password);
  }

}
