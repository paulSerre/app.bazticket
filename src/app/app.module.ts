import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Scanner QR code
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// Angular material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Auth0 SDK module
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

import { AppComponent } from './app.component';
import { ScannerComponent } from './component/scanner/scanner.component';
import { ViewEntriesComponent } from './component/view-entries/view-entries.component';
import { LoginButtonComponent } from './component/login-button/login-button.component';
import { LogoutButtonComponent } from './component/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './component/authentication-button/authentication-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    ViewEntriesComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ZXingScannerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
