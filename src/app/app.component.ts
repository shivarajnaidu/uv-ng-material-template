import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  sideNavMenuItems = [
  ['/home', 'Home'],
  ['/dash', 'Dashboard'],
  ['/users', 'Users'],
  ['/user/new', 'New User'],
  ['/login', 'Login'],
  ['/register', 'Register'],
  ].map(([path, text]) => ({path, text}));
}
