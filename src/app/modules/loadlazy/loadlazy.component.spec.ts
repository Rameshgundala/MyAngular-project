import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadlazyComponent } from './loadlazy.component';

describe('LoadlazyComponent', () => {
  let component: LoadlazyComponent;
  let fixture: ComponentFixture<LoadlazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadlazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
