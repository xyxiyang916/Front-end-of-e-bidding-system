import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicBidCreateComponent } from './bwic-bid-create.component';

describe('BwicBidCreateComponent', () => {
  let component: BwicBidCreateComponent;
  let fixture: ComponentFixture<BwicBidCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicBidCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicBidCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
