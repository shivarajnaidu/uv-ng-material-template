import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { menuItems as menuList } from './sidenav-items';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent implements OnInit, OnDestroy {
  menuItems = menuList;
  mobileQuery = this.media.matchMedia('(max-width: 600px)');
  private subscriptions: Subscription[] = [];
  isLoggedIn = false;
  subMenu = '';
  constructor(
    private media: MediaMatcher,
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['dashboard']);
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
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
