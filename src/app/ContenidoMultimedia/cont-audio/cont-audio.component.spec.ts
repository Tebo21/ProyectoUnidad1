import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContAudioComponent } from './cont-audio.component';

describe('ContAudioComponent', () => {
  let component: ContAudioComponent;
  let fixture: ComponentFixture<ContAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
