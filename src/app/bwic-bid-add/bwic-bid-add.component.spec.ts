import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicBidAddComponent } from './bwic-bid-add.component';

describe('BwicBidAddComponent', () => {
  let component: BwicBidAddComponent;
  let fixture: ComponentFixture<BwicBidAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicBidAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicBidAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
