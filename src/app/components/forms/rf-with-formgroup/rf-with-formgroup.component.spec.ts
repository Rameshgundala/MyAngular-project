import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfWithFormgroupComponent } from './rf-with-formgroup.component';

describe('RfWithFormgroupComponent', () => {
  let component: RfWithFormgroupComponent;
  let fixture: ComponentFixture<RfWithFormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfWithFormgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfWithFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
