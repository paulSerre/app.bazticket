import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [
  ]
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {
  }

  logout():void {
    this.authService.signOut();
  }

}
