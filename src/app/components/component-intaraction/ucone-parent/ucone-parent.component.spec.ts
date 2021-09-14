import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UconeParentComponent } from './ucone-parent.component';

describe('UconeParentComponent', () => {
  let component: UconeParentComponent;
  let fixture: ComponentFixture<UconeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UconeParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UconeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
