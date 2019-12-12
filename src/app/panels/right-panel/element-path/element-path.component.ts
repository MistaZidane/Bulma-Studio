import { Component, OnInit } from '@angular/core';
import {ElementPathService} from '../../../shared/element-path.service';
@Component({
  selector: 'app-element-path',
  templateUrl: './element-path.component.html',
  styleUrls: ['./element-path.component.css']
})
export class ElementPathComponent implements OnInit {
public elementPath: any;
  constructor(private path: ElementPathService) { }

  ngOnInit() {
    
    if(this.path.path$ != undefined){
      this.path.path$.subscribe( (data)=>{
        this.elementPath = data;
    })
    }
  }

}
