import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private otp: string;
  isPasswordMatched: boolean;
  constructor(
    private authServ: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.otp = this.route.snapshot.queryParams.otp;
  }
 async handlechangePasswordForm(form) {
    const { otp } = this;
    const data = Object.assign({}, form.value, { otp });
   const changePswdRes = await this.authServ.resetPassword(data);

  }

  checkPasswords(cPasswordCtrl: NgModel, passwordCtrl: NgModel) {
    this.isPasswordMatched = cPasswordCtrl.value === passwordCtrl.value;
    if (cPasswordCtrl.value !== passwordCtrl.value) {
      cPasswordCtrl.control.setErrors({ notMatching: true });
    } else {
      cPasswordCtrl.control.setErrors(null);
    }
  }

}
