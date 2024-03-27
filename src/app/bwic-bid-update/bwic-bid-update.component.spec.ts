import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicBidUpdateComponent } from './bwic-bid-update.component';

describe('BwicBidUpdateComponent', () => {
  let component: BwicBidUpdateComponent;
  let fixture: ComponentFixture<BwicBidUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicBidUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicBidUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
