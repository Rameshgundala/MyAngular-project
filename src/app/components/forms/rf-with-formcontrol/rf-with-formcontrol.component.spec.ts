import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfWithFormcontrolComponent } from './rf-with-formcontrol.component';

describe('RfWithFormcontrolComponent', () => {
  let component: RfWithFormcontrolComponent;
  let fixture: ComponentFixture<RfWithFormcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfWithFormcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfWithFormcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
