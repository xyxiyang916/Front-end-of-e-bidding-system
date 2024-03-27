import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicListFilterComponent } from './bwic-list-filter.component';

describe('BwicListFilterComponent', () => {
  let component: BwicListFilterComponent;
  let fixture: ComponentFixture<BwicListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
