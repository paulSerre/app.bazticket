import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html',
  styles: [
  ]
})
export class AuthenticationButtonComponent implements OnInit {

  constructor(
    public authService: AuthentificationService
  ) { }

  ngOnInit(): void {
  }

}
