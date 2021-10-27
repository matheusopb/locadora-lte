import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe12Component } from './exe12.component';

describe('Exe12Component', () => {
  let component: Exe12Component;
  let fixture: ComponentFixture<Exe12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exe12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exe12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
