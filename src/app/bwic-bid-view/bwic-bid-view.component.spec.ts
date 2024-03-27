import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicBidViewComponent } from './bwic-bid-view.component';

describe('BwicBidViewComponent', () => {
  let component: BwicBidViewComponent;
  let fixture: ComponentFixture<BwicBidViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicBidViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicBidViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
