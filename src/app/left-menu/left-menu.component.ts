import { Component } from '@angular/core';
import { UserInfo } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {

  userInfo?: UserInfo;
  currentMenu: string = 'welcome';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userInfo = this.userService.getLoggedUser();
  }

  updateMenuStatus(menuName: string): void {
    this.currentMenu = menuName;
  }

}
