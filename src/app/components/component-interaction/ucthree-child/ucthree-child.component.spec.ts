import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcthreeChildComponent } from './ucthree-child.component';

describe('UcthreeChildComponent', () => {
  let component: UcthreeChildComponent;
  let fixture: ComponentFixture<UcthreeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcthreeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcthreeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
