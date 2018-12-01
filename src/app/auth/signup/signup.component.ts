import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit() {
  }

  async handleSubmit(form) {
    const data = form.value;
    const signupResponse = await this.authServ.signup(data);
  }

}
