import { Component } from '@angular/core';
import { BwicInfo } from '../models/bwic';
import { Router } from '@angular/router';
import { BwicService } from '../services/bwic/bwic.service';
import { UserService } from '../services/user/user.service';

declare let toastr: any;

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  bwicList: BwicInfo[] = [];
  currentBwic: BwicInfo = new BwicInfo();
  // 获取用户信息
  private userId = this.userService.getLoggedUser().id;
  private num=window.localStorage.getItem('num') || '1'
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
    if (this.userId===-1) {
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

  deleteBwicBid(): void {
    this.bwicService.deleteBwic(this.currentBwic.bwicId).subscribe(bwicListFromResponse => {
      if (bwicListFromResponse) {
        this.setBwicList(this.currentFilterType);
      }
    })
  }

  // modify by bid record
  modifyBwicBid(modifydBwic: BwicInfo): void {
    this.bwicService.modifyBwicBid(modifydBwic).subscribe(bwicListFromResponse => {
      //用户余额不够的情况
      if (bwicListFromResponse.code === -102) {
        toastr.error('修改失败');
      } else {
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
