import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BwicInfo } from '../models/bwic';
// import { cloneDeep } from 'lodash'

@Component({
  selector: 'app-bwic-bid-update',
  templateUrl: './bwic-bid-update.component.html',
  styleUrls: ['./bwic-bid-update.component.css']
})
export class BwicBidUpdateComponent {

  @Input() currentBwicInput = new BwicInfo();
  @Output() updateBwicBidNotify = new EventEmitter<BwicInfo>();

  bwicFormData = new BwicInfo();

  //每次进来的时候input参数变化，会触发
  ngOnChanges(): void {
    // 引用类型变量默认是浅拷贝，因此下面引用的是内存中的同一变量，因此我们应该用深拷贝
    // this.bwicFormData = this.currentBwicInput;

    // 深拷贝
    Object.assign(this.bwicFormData, this.currentBwicInput);
  }

  updateBwicBid(): void {
    //将参数emit到父组件中
    this.updateBwicBidNotify.emit(this.bwicFormData);
  }
  
}
