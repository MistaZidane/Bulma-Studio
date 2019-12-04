import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftToolbarComponent } from './left-toolbar.component';

describe('LeftToolbarComponent', () => {
  let component: LeftToolbarComponent;
  let fixture: ComponentFixture<LeftToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
