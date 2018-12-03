import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
