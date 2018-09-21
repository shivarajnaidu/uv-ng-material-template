import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  @Input() snav;

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.snav.toggle();
  }
}
