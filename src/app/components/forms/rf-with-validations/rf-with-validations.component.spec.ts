import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfWithValidationsComponent } from './rf-with-validations.component';

describe('RfWithValidationsComponent', () => {
  let component: RfWithValidationsComponent;
  let fixture: ComponentFixture<RfWithValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfWithValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfWithValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
