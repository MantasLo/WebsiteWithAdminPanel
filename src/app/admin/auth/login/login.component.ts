import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  constructor(public authService: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.auth.signInWithEmailAndPassword(this.emailControl.value, this.passwordControl.value).catch(error => {
      if (error.code === 'auth/user-not-found') {
        this.emailControl.setErrors(['invalid']);
      } else if (error.code === 'auth/wrong-password') {
        this.passwordControl.setErrors(['password']);
      }
      return;
    }).then(res => {
      this.router.navigate(['/admin_prisijungimas']);
    });
  }

}
