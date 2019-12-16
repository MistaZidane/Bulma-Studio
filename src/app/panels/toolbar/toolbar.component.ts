import { Component, OnInit } from '@angular/core';
import {StateService} from '../../shared/state.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
 public open = false;
 // index for undo and redo
 public currentIndex = 1;
 public data;
  constructor(private iframeState: StateService) { }

  ngOnInit() {
    // clipboard pasting 
    window.addEventListener('paste', function(event){
      console.log("pasting");
      let pasted =(<any>event).clipboardData;
      let clip = document.querySelector('#clipboard');
      clip.innerHTML+= `<div class="dropdown-item">
      <pre> ${pasted.getData('text')} </pre>
   </div>
   <hr class="dropdown-divider">`
    })
    // working on the clipboard select from pre tag
  
  }
  // copy from clipboard
  copy(event){
    if(event.target.localName=='pre'){
      console.log('gdghsdhgd')
    // creating a texarea element to access the select() method
   let textarea = document.createElement('textarea');
   let targ = <HTMLElement> event.target;
   document.body.appendChild(textarea)
   textarea.value = targ.textContent;
   textarea.select();
   document.execCommand("copy");
   document.body.removeChild(textarea)
    }
    else{
      console.log("not ok")
    }
    
  }
 // working on undo and redo
 //undo 
  undo(){
    let length = this.iframeState._iframeContent.length;
   if(this.currentIndex== length){
     // set the focus bar element
     let empty = ''
    this.iframeState.iframedata(empty)
     console.log('max undo')
     return
   }
   else{
       // sending the data to the service
     this.iframeState.iframedata(this.iframeState._iframeContent[(length-1)-this.currentIndex])
    this.currentIndex += 1;
   }
  }
  //redo
  redo(){
    let length = this.iframeState._iframeContent.length;
    if(this.currentIndex >0 && this.currentIndex<=length){ 
      // sending the data to the service
      this.iframeState.iframedata(this.iframeState._iframeContent[length-this.currentIndex]) 
    this.currentIndex -= 1;
    }
    else{
     console.log("hihest undo")
     return
    }
  }

  sideDrawer(){
   console.log("dwwf")
  }

  // code view 

}
