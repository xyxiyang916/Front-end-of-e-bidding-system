import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicBidModifyComponent } from './bwic-bid-modify.component';

describe('BwicBidModifyComponent', () => {
  let component: BwicBidModifyComponent;
  let fixture: ComponentFixture<BwicBidModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicBidModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicBidModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
