import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-navbar-top',
    templateUrl: './navbar-top.component.html',
    styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

    @Input() snav;

    constructor(
        private userServ: UserService
    ) { }

    ngOnInit() {
    }

    toggleSideNav() {
        this.snav.toggle();
    }

    logout() {
        this.userServ.logout();
    }
}
