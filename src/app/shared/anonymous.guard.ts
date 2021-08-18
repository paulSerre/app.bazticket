import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouteReuseStrategy, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthentificationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {

  constructor(    
    private authService: AuthentificationService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user$
      .pipe(map(authState => !!authState))
      .pipe(tap((auth) => {
        if(!auth) {
          return true;
        } else {
          this.router.navigate(['scanner']);
          return false;
        }
      }))
  }
  
}
