import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bwic-list-filter',
  templateUrl: './bwic-list-filter.component.html',
  styleUrls: ['./bwic-list-filter.component.css']
})
export class BwicListFilterComponent {

  @Output() filterNotify = new EventEmitter<string>();


}
