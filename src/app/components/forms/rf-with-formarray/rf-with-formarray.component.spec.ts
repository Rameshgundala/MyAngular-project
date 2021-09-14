import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfWithFormarrayComponent } from './rf-with-formarray.component';

describe('RfWithFormarrayComponent', () => {
  let component: RfWithFormarrayComponent;
  let fixture: ComponentFixture<RfWithFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfWithFormarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfWithFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
