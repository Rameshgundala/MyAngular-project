import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UctwoChildComponent } from './uctwo-child.component';

describe('UctwoChildComponent', () => {
  let component: UctwoChildComponent;
  let fixture: ComponentFixture<UctwoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UctwoChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UctwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
