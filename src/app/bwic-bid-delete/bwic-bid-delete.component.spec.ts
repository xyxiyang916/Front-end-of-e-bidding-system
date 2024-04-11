import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicBidDeleteComponent } from './bwic-bid-delete.component';

describe('BwicBidDeleteComponent', () => {
  let component: BwicBidDeleteComponent;
  let fixture: ComponentFixture<BwicBidDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicBidDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicBidDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
