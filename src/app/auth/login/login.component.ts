import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authServ: AuthService,
    private userServ: UserService,
    private tokenServ: TokenService
  ) { }

  ngOnInit() {
  }

  async handleSubmit(form) {
    const data = form.value;
    const loginResponse: any = await this.authServ.login(data);
    this.tokenServ.token = loginResponse.token;
    this.userServ.subject.next(true);
  }

}
