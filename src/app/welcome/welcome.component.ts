import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  userId = this.userService.getLoggedUser().id;

  constructor(
    private userService: UserService,
  ) { }

  welcomeMessage: string = 'Welcome to e Bidding System, You can view BWIC list by clicking "View BWIC" menu on the left.'
  public setnum(num: number): void {
    window.localStorage.setItem('num', num + "");
  }

}
