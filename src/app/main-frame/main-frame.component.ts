import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent {
  private userId = this.userService.getLoggedUser().id;

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    // 有登录用户
    if (this.userId !== -1 && this.userId !== 1) {
      // 否则要求登录
      this.route.navigate(['/login']);
    }
  }
}
