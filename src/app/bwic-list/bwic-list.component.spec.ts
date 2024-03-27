import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwicListComponent } from './bwic-list.component';

describe('BwicListComponent', () => {
  let component: BwicListComponent;
  let fixture: ComponentFixture<BwicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
