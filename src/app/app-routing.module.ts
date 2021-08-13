import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './component/sign-in/sign-in.component';
import { ScannerComponent } from './component/scanner/scanner.component';
import { ViewEntriesComponent } from './component/view-entries/view-entries.component';

import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
  { 
    path: 'sign-in', 
    component: SignInComponent,
  },
  { 
    path: 'scanner', 
    component: ScannerComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'view-entries', 
    component: ViewEntriesComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
