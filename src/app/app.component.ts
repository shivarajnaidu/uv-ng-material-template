import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uv-ng-material-template';


  sideNavMenuItems = [
    ['/', 'Home'],
    ['/dash', 'Dashboard'],
    ['/users', 'Users'],
    ['/user/new', 'New User'],
    ['/account/login', 'Login'],
    ['/account/signup', 'Register'],
  ].map(([path, text]) => ({ path, text }));

  closeSideNav(snav) {
    snav.close();
  }
}

