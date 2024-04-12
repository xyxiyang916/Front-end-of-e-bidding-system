import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private userService: UserService, private route: Router) {}
  username = this.userService.getLoggedUser().name;

  logout() {
    this.userService.clearUserFromLocalStorage();
    this.route.navigate(['/']);
  }
}
