import { ChangeDetectionStrategy, Component, inject, input, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { AuthService } from '../../services/auth/auth.service';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    MatToolbar,
    MatMenu,
    MatMenuTrigger,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  isLoggedIn = false;
  snav = input<any>();
  title = '';
  #auth = inject(AuthService);

  toggleSideNav() {
    this.snav()?.toggle();
  }


  openChangePasswordModal() {
    // this.dialog.open(UpdatePasswordComponent);
  }


  showLoginIcon() {
    this.isLoggedIn = this.#auth.isLoggedIn();
  }

  logout() {
    // this.auth.logout();
    console.log('Clicked On Logout');
  }

}
