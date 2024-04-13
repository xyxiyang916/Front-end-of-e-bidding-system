import { UserInfoResponse } from 'src/app/models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BwicService } from '../services/bwic/bwic.service';
import { UserService } from '../services/user/user.service';
import { BwicInfo } from '../models/bwic';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {

  private userId = this.userService.getLoggedUser().id;
  bwicList: BwicInfo[] = [];
  page: number[] = [];
  pageNum = 0;
  cusipNum = 0;
  money = 0;
  constructor(
    private bwicService: BwicService,
    private userService: UserService,
    private route: Router
  ) { }
  username = "abc"
  userGroup = "普通用户"
  ngOnInit(): void {
    // 有登录用户
    if (this.userId === -1 || this.userId===1) {
    } else {
      // 否则要求登录
      this.route.navigate(['/login']);
    }
    this.bwicService.getBwicListold(this.userId, "My").subscribe(bwicListFromResponse => {
      // 根据搜索内容进行筛选
      this.bwicList = bwicListFromResponse.slice(10 * this.pageNum, 10 * (this.pageNum + 1));
      this.cusipNum = this.bwicList.length;
      this.creatPagination(bwicListFromResponse.filter(bwic => bwic.overDue).length);
    });
    this.userService.getUserInfo(this.userId).subscribe(userInfoResponse => {
      this.money = userInfoResponse.data.assetValue;
    })
  }

  creatPagination(num: number = 0): void {
    this.page = []
    num = num / 10;
    if (num.toString().indexOf('.') != -1) {
      num += 1;
    }
    for (let i = 1; i < num; i++) {
      this.page.push(i);
    }
  }

  changePage(num: number = 0): void {
    this.pageNum = num - 1;
    this.bwicService.getBwicList(this.userId, "My").subscribe(bwicListFromResponse => {
      // 根据搜索内容进行筛选
      this.bwicList = bwicListFromResponse.slice(10 * this.pageNum, 10 * (this.pageNum + 1));
      this.creatPagination(bwicListFromResponse.filter(bwic => bwic.overDue).length);
    });
  }
}
