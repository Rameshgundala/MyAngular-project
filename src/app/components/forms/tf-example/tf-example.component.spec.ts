import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfExampleComponent } from './tf-example.component';

describe('TfExampleComponent', () => {
  let component: TfExampleComponent;
  let fixture: ComponentFixture<TfExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
