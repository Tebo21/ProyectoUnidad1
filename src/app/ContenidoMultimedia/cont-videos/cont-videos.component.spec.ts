import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContVideosComponent } from './cont-videos.component';

describe('ContVideosComponent', () => {
  let component: ContVideosComponent;
  let fixture: ComponentFixture<ContVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
