import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelArticuloComponent } from './panel-articulo.component';

describe('PanelArticuloComponent', () => {
  let component: PanelArticuloComponent;
  let fixture: ComponentFixture<PanelArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
