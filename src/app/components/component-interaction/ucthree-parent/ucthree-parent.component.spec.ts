import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcthreeParentComponent } from './ucthree-parent.component';

describe('UcthreeParentComponent', () => {
  let component: UcthreeParentComponent;
  let fixture: ComponentFixture<UcthreeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcthreeParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcthreeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
