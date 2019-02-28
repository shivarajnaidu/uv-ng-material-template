import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  EditProfile: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private profileServ: ProfileService
  ) {
    this.initForm();
  }

  async initForm() {
    const editId = await this.route.snapshot.paramMap.get('id');
    this.EditProfile = await this.profileServ.getUserById(editId);

  }

  handleSubmit(form) {
    const data = form.value;
    const EditRes = this.profileServ.updateUser(data);

  }
  ngOnInit() {
  }
}
