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
  userGroup: number = 1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userInfo = this.userService.getLoggedUser();
    this.userGroup = this.userInfo.id
  }

  updateMenuStatus(menuName: string): void {
    this.currentMenu = menuName;
  }

}
