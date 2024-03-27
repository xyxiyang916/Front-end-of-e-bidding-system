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
  private userId = this.userService.getLoggedUser().id;
  currentFilterType: string = 'All';

  constructor(
    private bwicService: BwicService,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    if (this.userId) {
      this.setBwicList();
    } else {
      this.route.navigate(['/']);
    }
  }

  setBwicList(filterType: string = 'All'): void {
    if(filterType === 'Ended') {
      this.bwicService.getBwicList(this.userId).subscribe(bwicListFromResponse => {
        this.bwicList = bwicListFromResponse.filter(bwic => bwic.overDue);
      });
    } else {
      this.bwicService.getBwicList(this.userId, filterType).subscribe(bwicListFromResponse => {
        this.bwicList = bwicListFromResponse;
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
}
