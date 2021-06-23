import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  readonly selectedUser$ = this.usersService.getSelectedUser();

  constructor(private readonly usersService: UsersService) {}

  ngOnInit() {
    this.usersService.loadUsersIfNeeded();
  }
}
