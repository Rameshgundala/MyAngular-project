import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UctwoParentComponent } from './uctwo-parent.component';

describe('UctwoParentComponent', () => {
  let component: UctwoParentComponent;
  let fixture: ComponentFixture<UctwoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UctwoParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UctwoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
