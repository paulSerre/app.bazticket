import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScannerComponent } from './component/scanner/scanner.component';
import { ViewEntriesComponent } from './component/view-entries/view-entries.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
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
  { 
    path: '', 
    component: ScannerComponent,
    canActivate: [AuthGuard], 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
