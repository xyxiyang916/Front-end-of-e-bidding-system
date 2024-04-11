import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bwic-bid-delete',
  templateUrl: './bwic-bid-delete.component.html',
  styleUrls: ['./bwic-bid-delete.component.css']
})
export class BwicBidDeleteComponent {

  @Input() currentBwicIdInput: number = 0;
  @Output() deleteBwicBidNotify = new EventEmitter<number>();
  
}
