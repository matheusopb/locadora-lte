import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe1314Component } from './exe1314.component';

describe('Exe1314Component', () => {
  let component: Exe1314Component;
  let fixture: ComponentFixture<Exe1314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exe1314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exe1314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
