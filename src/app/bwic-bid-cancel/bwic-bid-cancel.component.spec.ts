import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicBidCancelComponent } from './bwic-bid-cancel.component';

describe('BwicBidCancelComponent', () => {
  let component: BwicBidCancelComponent;
  let fixture: ComponentFixture<BwicBidCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicBidCancelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicBidCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
