import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLogin2Component } from './formulario-login2.component';

describe('FormularioLogin2Component', () => {
  let component: FormularioLogin2Component;
  let fixture: ComponentFixture<FormularioLogin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioLogin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
