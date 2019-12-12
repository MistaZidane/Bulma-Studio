import { Component, OnInit } from '@angular/core';
import { RightPanelService } from '../../../../shared/right-panel.service';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor(private currentElement: RightPanelService) { }

  ngOnInit() {

  }
  animation(event){
   let  element = <HTMLElement> this.currentElement.edditedElement;
   element.classList.add('animate');
   element.classList.add(event.target.value);
   console.log(element)
  }

}
