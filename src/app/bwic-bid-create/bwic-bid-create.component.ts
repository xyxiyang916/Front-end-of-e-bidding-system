import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BwicInfo } from '../models/bwic';

@Component({
  selector: 'app-bwic-bid-create',
  templateUrl: './bwic-bid-create.component.html',
  styleUrls: ['./bwic-bid-create.component.css']
})
export class BwicBidCreateComponent {
  @Output() createBwicBidNotify = new EventEmitter<BwicInfo>();

  bwicFormData: BwicInfo = new BwicInfo();

  // 将 bwicFormData 的值通过 createBwicBidNotify 输出属性发送出去
  createBwicBid(): void {
    this.createBwicBidNotify.emit(this.bwicFormData);
  }
  // 在组件类中定义一个用于保存值的属性
  dueDateValue: string = "";

  // 在组件类中定义一个方法来处理输入值的变化
  onDueDateChange(value: string) {
    this.bwicFormData.dueDate = new Date(value);
    this.bwicFormData.dueDate.setHours(0, 0, 0, 0);
  }
}
