import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: [
  ]
})
export class LoginButtonComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginWithRedirect() {
    this.router.navigate(['sign-in']);
  }

}
