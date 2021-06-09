import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  isLoggedIn = false;
  @Input() snav: any;
  title = '';

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.snav?.toggle();
  }


  openChangePasswordModal() {
    // this.dialog.open(UpdatePasswordComponent);
  }


  showLoginIcon() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  logout() {
    // this.auth.logout();
    console.log('Clicked On Logout');
  }

}
