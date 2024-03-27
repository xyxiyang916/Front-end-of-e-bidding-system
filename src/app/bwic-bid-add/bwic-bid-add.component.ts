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

  ngOnChanges(): void {
    Object.assign(this.bwicFormData, this.currentBwicInput)
  }

  addBwicBid(): void {
    this.addBwidBidNotify.emit(this.bwicFormData);
  }
}
