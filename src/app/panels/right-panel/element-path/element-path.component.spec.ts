import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPathComponent } from './element-path.component';

describe('ElementPathComponent', () => {
  let component: ElementPathComponent;
  let fixture: ComponentFixture<ElementPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
