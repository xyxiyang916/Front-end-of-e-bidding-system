import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSituationComponent } from './market-situation.component';

describe('MarketSituationComponent', () => {
  let component: MarketSituationComponent;
  let fixture: ComponentFixture<MarketSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
