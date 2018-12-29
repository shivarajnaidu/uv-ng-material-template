import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-navbar-top',
    templateUrl: './navbar-top.component.html',
    styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

    @Input() snav;
    LoggedIn = false;
    constructor(
        private userServ: UserService
    ) {
        this.LoggedIn = this.userServ.isLoggedIn();
        this.userServ.subject.subscribe((isLoggedIn) => {
            this.LoggedIn = isLoggedIn;
        });
    }

    ngOnInit() {
    }

    toggleSideNav() {
        this.snav.toggle();
    }

    logout() {
        this.userServ.logout();
    }
}
