import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bwic-bid-cancel',
  templateUrl: './bwic-bid-cancel.component.html',
  styleUrls: ['./bwic-bid-cancel.component.css']
})
export class BwicBidCancelComponent {

  @Input() currentBwicIdInput: number = 0;
  @Output() cancelBwicBidNotify = new EventEmitter<number>();
  
}
