import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframePanelComponent } from './iframe-panel.component';

describe('IframePanelComponent', () => {
  let component: IframePanelComponent;
  let fixture: ComponentFixture<IframePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
