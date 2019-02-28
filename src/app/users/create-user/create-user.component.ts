import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private profileServ: ProfileService
  ) { }

  ngOnInit() {
  }
  async handleSubmit(form) {
    const data = form.value;
    const profileRes = await this.profileServ.newUser(data);
  }

}
