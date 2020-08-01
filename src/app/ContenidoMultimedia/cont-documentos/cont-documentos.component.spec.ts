import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContDocumentosComponent } from './cont-documentos.component';

describe('ContDocumentosComponent', () => {
  let component: ContDocumentosComponent;
  let fixture: ComponentFixture<ContDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
