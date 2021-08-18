import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './services/authentification.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Bazticket entry manager';
  user$: Observable<any>;

  constructor(
    private authService: AuthentificationService
  ) {
    this.user$ = this.authService.user$;
  }
}
