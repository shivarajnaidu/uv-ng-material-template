import { Component } from '@angular/core';
import { sidenavMenuItems, SideNavItem } from './side-nav-menuitems';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uv-ng-material-template';

  sideNavMenuItems: SideNavItem[];
  loggedIn = false;

  constructor(
    private authServ: AuthService
  ) {
    this.sideNavMenuItems = sidenavMenuItems;
    this.loggedIn = this.authServ.isLoggedIn;
    this.authServ.subject.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
    });
  }

  closeSideNav(snav) {
    snav.close();
  }

  toggleMenuItems(navItem) {
    navItem.isExpanded = !navItem.isExpanded;
  }

}

