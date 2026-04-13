import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../../types/users-list-response.type';

@Component({
  selector: 'app-obs-com-array',
  templateUrl: './obs-com-array.component.html',
  styleUrl: './obs-com-array.component.scss'
})
export class ObsComArrayComponent implements OnInit {
  users$!: Observable<UsersListResponse>;

  constructor(
    private readonly _usersService: UserService
  ) {}

  ngOnInit() {
    this.users$ = this._usersService.getUsers();
  }
}
