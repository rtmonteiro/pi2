import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcolhidosListComponent } from './acolhidos-list.component';

describe('AcolhidosListComponent', () => {
  let component: AcolhidosListComponent;
  let fixture: ComponentFixture<AcolhidosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcolhidosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcolhidosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
