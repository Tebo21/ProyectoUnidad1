import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContImagenesComponent } from './cont-imagenes.component';

describe('ContImagenesComponent', () => {
  let component: ContImagenesComponent;
  let fixture: ComponentFixture<ContImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
