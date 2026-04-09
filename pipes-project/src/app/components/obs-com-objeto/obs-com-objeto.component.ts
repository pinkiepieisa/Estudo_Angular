import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user-response.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})
export class ObsComObjetoComponent implements OnInit, OnDestroy {
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  user$!: Observable<IUserResponse>;

  constructor(private readonly _usersService: UserService) {}

  ngOnInit() {
    this.user$ = this._usersService.getUserById(1);

    this.userSubs = this._usersService.getUserById(2).subscribe((userResponse) =>
      this.user = userResponse);
  }

  ngOnDestroy() {
    this.userSubs && this.userSubs.unsubscribe();
  }
}
