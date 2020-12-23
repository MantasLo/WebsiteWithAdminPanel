import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(public authService: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.auth.signInWithEmailAndPassword(form.value.email, form.value.password).then(res => {
      this.router.navigate(['/admin_prisijungimas']);
    });
  }

}
