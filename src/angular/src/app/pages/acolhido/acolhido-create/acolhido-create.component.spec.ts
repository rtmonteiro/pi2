import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcolhidoCreateComponent } from './acolhido-create.component';

describe('AcolhidoCreateComponent', () => {
  let component: AcolhidoCreateComponent;
  let fixture: ComponentFixture<AcolhidoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcolhidoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcolhidoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
