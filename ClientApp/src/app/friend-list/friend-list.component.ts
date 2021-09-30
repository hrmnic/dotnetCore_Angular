import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { UserListDTO } from '../_models/userListDTO';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  users: UserListDTO[];
  followParams: string = "followings";

  constructor(private userService: UserService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers(this.followParams).subscribe(users => {
      this.users = users;
    }, err => {
      this.alertify.error(err);
    })
  }
}
