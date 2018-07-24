import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigntransComponent } from './signtrans.component';

describe('SigntransComponent', () => {
  let component: SigntransComponent;
  let fixture: ComponentFixture<SigntransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigntransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigntransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
