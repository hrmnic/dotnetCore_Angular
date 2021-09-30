import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { UserListDTO } from 'src/app/_models/userListDTO';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  users: UserListDTO[];
  public loading=false;
  userParams: any={};

  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    // this.userParams.orderby="lastactive";
    // this.userParams.minAge="20";  //seçili gelir
    this.getUsers();
  }

  getUsers() {

    this.loading=true;
    this.userService.getUsers(null,this.userParams).subscribe(users => {
      this.loading=false;
      this.users = users;
    }, err => {
      this.loading=false;
      this.alertify.error(err);
    })
  }

}
