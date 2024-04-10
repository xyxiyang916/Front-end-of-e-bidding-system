import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BwicInfo } from '../models/bwic';

@Component({
  selector: 'app-bwic-bid-add',
  templateUrl: './bwic-bid-add.component.html',
  styleUrls: ['./bwic-bid-add.component.css']
})
export class BwicBidAddComponent {

  @Input() currentBwicInput = new BwicInfo();
  @Output() addBwidBidNotify = new EventEmitter<BwicInfo>();

  bwicFormData: BwicInfo = new BwicInfo();
  // 生命周期钩子函数，在输入属性发生变化时执行，currentBwicInput 的值复制到 bwicFormData
  ngOnChanges(): void {
    Object.assign(this.bwicFormData, this.currentBwicInput)
  }
  // 将 bwicFormData 的值通过 addBwidBidNotify 输出属性发送出去
  addBwicBid(): void {
    this.addBwidBidNotify.emit(this.bwicFormData);
  }
}
