import { Component, OnInit } from '@angular/core';
import {RightPanelService} from '../../../../shared/right-panel.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
public unitToChange = [];
  constructor( private rightPanel: RightPanelService) { }

  ngOnInit() {

  }
  // setting up the array to carry width data
  widthChange(value){
    this.unitToChange[0]= value.toLowerCase();
      console.log(this.unitToChange) 
  }
  unitChange(value){
    this.unitToChange[2]= value.toLowerCase();
      console.log(this.unitToChange)

  }
  widthInputChange(value){
    this.unitToChange[1]= value.toLowerCase();
    console.log(this.unitToChange)
  }

}
