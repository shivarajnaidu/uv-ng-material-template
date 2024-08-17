import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { menuItems as menuList } from './sidenav-items';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    MatNavList,
    MatIcon,
    RouterLink,
    MatSidenavContainer,
    MatSidenav,
    MatButton,
    MatSidenavContent,
    TopNavComponent,
    MatListItem,
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  menuItems = menuList;
  isLoggedIn = false;
  subMenu = '';
  #media = inject(MediaMatcher);
  #auth = inject(AuthService);
  #router = inject(Router);
  #subscriptions: Subscription[] = [];
  mobileQuery = this.#media.matchMedia('(max-width: 600px)');

  ngOnInit() {
    if (this.#router.url === '/') {
      this.#router.navigate(['dashboard']);
    }

    // this.listenForTitleChanges();
    this.showLoginIcon();
  }

  // set current sub menu
  setSubMenu(value: string | ''): void {
    if (value === this.subMenu) {
      this.subMenu = '';
      return;
    }
    this.subMenu = value
  }


  showLoginIcon() {
    this.isLoggedIn = this.#auth.isLoggedIn();
  }

  ngOnDestroy() {
    this.#subscriptions.forEach(s => s.unsubscribe());
  }
}
