import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-navbar-top',
    templateUrl: './navbar-top.component.html',
    styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

    @Input() snav;
    LoggedIn = false;
    constructor(
        private authServ: AuthService
    ) {
        this.LoggedIn = this.authServ.isLoggedIn;
        this.authServ.subject.subscribe((isLoggedIn) => {
            this.LoggedIn = isLoggedIn;
        });
    }

    ngOnInit() {
    }

    toggleSideNav() {
        this.snav.toggle();
    }

    logout() {
        this.authServ.logout();
    }
}
