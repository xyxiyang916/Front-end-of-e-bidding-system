import { BwicListFilterComponent } from './../bwic-list-filter/bwic-list-filter.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BwicInfo } from '../models/bwic';
import { BwicService } from '../services/bwic/bwic.service';
import { UserService } from '../services/user/user.service';

declare let toastr: any;

@Component({
  selector: 'app-bwic-list',
  templateUrl: './bwic-list.component.html',
  styleUrls: ['./bwic-list.component.css']
})
export class BwicListComponent {

  bwicList: BwicInfo[] = [];
  currentBwic: BwicInfo = new BwicInfo();
  nowBwic: BwicInfo = new BwicInfo();
  // 获取用户信息
  private userId = this.userService.getLoggedUser().id;
  private num = window.localStorage.getItem('num') || '1'
  currentFilterType: string = 'All';
  page: number[] = [];
  pageNum = 0;
  // 搜索内容
  searchText: string = '';

  constructor(
    private bwicService: BwicService,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    // 有登录用户
    if (this.userId) {
      this.page = [];
      this.setBwicList();
    } else {
      // 否则要求登录
      this.route.navigate(['/login']);
    }
  }
  // 通过双向绑定获取搜索内容
  search(): void {
    this.setBwicList(this.currentFilterType, this.searchText)
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
    this.setBwicList(this.currentFilterType)
  }

  setBwicList(filterType: string = 'All', text: string = ''): void {
    // 用户选择ended
    if (filterType === 'Ended') {
      // 获取当前结束的
      // 先获取所有的再筛选
      this.bwicService.getBwicList(this.userId, this.num).subscribe(bwicListFromResponse => {
        //当前拍卖
        this.nowBwic = bwicListFromResponse[0]
        bwicListFromResponse = bwicListFromResponse.slice(1, bwicListFromResponse.length)
        // 根据搜索内容进行筛选
        if (this.searchText !== '') {
          bwicListFromResponse = bwicListFromResponse.filter(item => item.cusip.includes(this.searchText));
        }
        this.bwicList = bwicListFromResponse.filter(bwic => bwic.overDue).slice(10 * this.pageNum, 10 * (this.pageNum + 1));
        this.creatPagination(bwicListFromResponse.filter(bwic => bwic.overDue).length);

      });
      // 根据类型获取所有或者我的所有
    } else {
      this.bwicService.getBwicList(this.userId, this.num, filterType).subscribe(bwicListFromResponse => {
        //当前拍卖
        this.nowBwic = bwicListFromResponse[0]
        bwicListFromResponse = bwicListFromResponse.slice(1, bwicListFromResponse.length)
        // 根据搜索内容进行筛选
        if (this.searchText !== '') {
          bwicListFromResponse = bwicListFromResponse.filter(item => item.cusip.includes(this.searchText));
        }
        this.bwicList = bwicListFromResponse.slice(10 * this.pageNum, 10 * (this.pageNum + 1));
        this.creatPagination(bwicListFromResponse.length);

      });
    }
    this.currentFilterType = filterType;
  }

  setCurrentBwic(bwicId: number): void {
    this.currentBwic = this.bwicList.find(bwic => bwic.bwicId === bwicId) || this.currentBwic;
  }

  // update by bid record
  updateBwicBid(updatedBwic: BwicInfo): void {
    this.bwicService.updateBwicBid(updatedBwic).subscribe(bwicListFromResponse => {
      //用户余额不够的情况
      if (bwicListFromResponse.code === -102) {
        toastr.error('你的余额不足，无法申购这个债券！');
      } else {
        this.setBwicList(this.currentFilterType);
      }
    })
  }

  addBwicBid(addedBwic: BwicInfo): void {
    this.bwicService.updateBwicBid(addedBwic).subscribe(bwicListFromResponse => {
      //用户余额不够的情况
      if (bwicListFromResponse.code === -102) {
        toastr.error('你的余额不足，无法申购这个债券！');
      } else {
        this.setBwicList(this.currentFilterType);
      }
    })
  }

  cancelBwicBid(): void {
    this.bwicService.cancelBwic(this.currentBwic.bwicId).subscribe(bwicListFromResponse => {
      if (bwicListFromResponse) {
        this.setBwicList(this.currentFilterType);
      }
    })
  }

  // create by bid record
  createBwicBid(createdBwic: BwicInfo): void {
    this.bwicService.createBwicBid(createdBwic).subscribe(bwicListFromResponse => {
      //用户余额不够的情况
      if (bwicListFromResponse.code === -102) {
        toastr.error('修改失败');
      } else {
        this.setBwicList(this.currentFilterType);
      }
    })
  }
}
