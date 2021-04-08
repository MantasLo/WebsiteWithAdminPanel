import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit, OnDestroy {

  constructor(public authService: AngularFireAuth, private router: Router) {}

  ngOnInit() {
  }

  onLogout() {
    this.authService.auth.signOut().then(() => {
      this.router.navigate(['/admin_prisijungimas', 'login']);
    });
  }

  routeTo(route: string) {
    switch (route) {
      case 'projects':
        this.router.navigate(['admin_prisijungimas']);
        break;
      case 'create':
        this.router.navigate(['admin_prisijungimas', 'create']);
        break;
      case 'login':
        this.router.navigate(['admin_prisijungimas', 'login']);
        break;
      default:
        this.router.navigate(['admin_prisijungimas']);
        break;
    }
  }

  ngOnDestroy() {
  }
}
