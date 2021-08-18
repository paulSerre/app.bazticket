import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private authService: AuthentificationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }); 
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  
  onSubmit() {
    this.authService.signIn(this.email?.value, this.password?.value)
  }

}
