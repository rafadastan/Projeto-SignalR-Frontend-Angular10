import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasConsultaComponent } from './contas-consulta.component';

describe('ContasConsultaComponent', () => {
  let component: ContasConsultaComponent;
  let fixture: ComponentFixture<ContasConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
