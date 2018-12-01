import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit() {
  }

  async handleSubmit(form) {
    const data = form.value;
    const loginResponse = await this.authServ.login(data);
  }

}
