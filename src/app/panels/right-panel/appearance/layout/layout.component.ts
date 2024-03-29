import { Component, OnInit } from '@angular/core';
import { RightPanelService } from '../../../../shared/right-panel.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public unitAndValue = [];
  constructor(private rightPanelData: RightPanelService) { }

  ngOnInit() {

  }
  // working on display
  display(event) {
    try{
      let element = <HTMLElement>this.rightPanelData.edditedElement;
    element.style.display = event.target.value;
    }
    catch{}
    
  }
  // working on float 
  float(value) {
    try{
      let element = <HTMLElement>this.rightPanelData.edditedElement;
      if (value == ' ') {
        element.style.removeProperty('float')
      }
      else {
        element.style.cssFloat = value;
      }
    }
    catch{}
   
  }

}
