import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubToolsComponent } from './sub-tools.component';

describe('SubToolsComponent', () => {
  let component: SubToolsComponent;
  let fixture: ComponentFixture<SubToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
