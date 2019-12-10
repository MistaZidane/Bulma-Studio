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
    let width = <HTMLSelectElement>document.querySelector('#width');
    let widthInput = <HTMLInputElement>document.querySelector('#widthInput');
    let widthUnit = <HTMLSelectElement>document.querySelector('#widthUnit');
    this.unitAndValue[0] = width.value;
    this.unitAndValue[1] = widthUnit.value;
    width.addEventListener('change', () => {
      let element = <HTMLElement>this.rightPanelData.edditedElement;
      if(width.value == 'Width')element.style.width = `${widthInput.value}${widthUnit.value}`;
      else if(width.value == 'Min-width')element.style.minWidth = `${widthInput.value}${widthUnit.value}`;
      else if(width.value == 'Max-width')element.style.maxWidth = `${widthInput.value}${widthUnit.value}`;
    })
    widthInput.addEventListener('change',()=>{
      let element = <HTMLElement>this.rightPanelData.edditedElement;
      if(width.value == 'Width')element.style.width = `${widthInput.value}${widthUnit.value}`;
      else if(width.value == 'Min-width')element.style.minWidth = `${widthInput.value}${widthUnit.value}`;
      else if(width.value == 'Max-width')element.style.maxWidth = `${widthInput.value}${widthUnit.value}`;
    })
    widthUnit.addEventListener('change', ()=>{
      let element = <HTMLElement>this.rightPanelData.edditedElement;
      if(width.value == 'Width')element.style.width = `${widthInput.value}${widthUnit.value}`;
      else if(width.value == 'Min-width')element.style.minWidth = `${widthInput.value}${widthUnit.value}`;
      else if(width.value == 'Max-width')element.style.maxWidth = `${widthInput.value}${widthUnit.value}`;
    })

  }
  // setting up the array to carry width data

  //  let dd= <HTMLElement> this.rightPanelData.edditedElement;
  //  dd.style.color = 'red';


}
