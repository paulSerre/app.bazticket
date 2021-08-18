import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule }  from '@angular/material/form-field';

//Scanner QR code
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// Angular material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'

// Auth0 SDK module
import { environment as env } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { ScannerComponent } from './component/scanner/scanner.component';
import { ViewEntriesComponent } from './component/view-entries/view-entries.component';

// Auth
import { SignInComponent } from './component/sign-in/sign-in.component';
import { LoginButtonComponent } from './component/login-button/login-button.component';
import { LogoutButtonComponent } from './component/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './component/authentication-button/authentication-button.component';



@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    ViewEntriesComponent,
    SignInComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    ZXingScannerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
