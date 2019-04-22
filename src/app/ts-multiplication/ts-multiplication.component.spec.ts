import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsMultiplicationComponent } from './ts-multiplication.component';

describe('TsMultiplicationComponent', () => {
  let component: TsMultiplicationComponent;
  let fixture: ComponentFixture<TsMultiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsMultiplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
