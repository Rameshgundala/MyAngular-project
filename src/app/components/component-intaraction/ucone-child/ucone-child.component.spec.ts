import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UconeChildComponent } from './ucone-child.component';

describe('UconeChildComponent', () => {
  let component: UconeChildComponent;
  let fixture: ComponentFixture<UconeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UconeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UconeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
