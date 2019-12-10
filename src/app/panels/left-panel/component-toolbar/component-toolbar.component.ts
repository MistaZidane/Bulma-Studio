import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/data.service';
@Component({
  selector: 'app-component-toolbar',
  templateUrl: './component-toolbar.component.html',
  styleUrls: ['./component-toolbar.component.css']
})
export class ComponentToolbarComponent implements OnInit {
  // varaibles to hold data from the service
  public recivedComponentData = []
  public recievedElementData = []
  public dataToBeSent: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    // getting all the data associated with the service
    this.recivedComponentData = this.data.componentData;
    this.recievedElementData = this.data.elementData;
    let dragMe = document.querySelector('.dragMe');
    // still to work on it
    dragMe.addEventListener('dragstart', function(event){
      console.log(event.target)
      var crt = this.cloneNode(true);
      console.log(crt)
      crt.style.backgroundColor = "red";
      crt.style.display="block" /* or visibility: hidden, or any of the above */
      document.body.appendChild(crt);
      // event.dataTransfer.setDragImage(crt, 10, 10);
    })
  }

  // handles componet data drag
  comDrag(event) {
    // handles component data drag
    event.preventDefault()
    // console.log(event.target.innerHTML)
    // console.log(this.data.data)
    
    let text = event.target.innerHTML;
    for (let i = 0; i < this.data.componentData.length; i++) {
      if (this.recivedComponentData[i].name == text) {
        this.dataToBeSent = this.recivedComponentData[i].source;
        this.data.recievedData = this.dataToBeSent
        
      }
    }
  }
  // handles element data drag
  elemDrag(event) {
    event.preventDefault()
    let text = event.target.innerHTML;
    for (let i = 0; i < this.data.elementData.length; i++) {
      if (this.recievedElementData[i].name == text) {
        this.dataToBeSent = this.recievedElementData[i].source;
        this.data.recievedData = this.dataToBeSent
        
      }
    }
    

  }
  // handles layout data drag
  layDrag(event) {
    event.preventDefault()
    console.log(event.target.innerHTML)

  }

  // handles form data drag
  formDrag(event) {
    event.preventDefault()
    console.log(event.target.innerHTML)

  }
  // show the hidden preview div
  over(event) {
    // event.preventDefault()
    // let previewDiv = <HTMLElement>document.querySelector('#preview');
    // let text = event.target.innerHTML;
    // for (let i = 0; i < this.data.componentData.length; i++) {
    //   if (this.recivedComponentData[i].name == text) {
    //     previewDiv.innerHTML = this.recivedComponentData[i].source;
    //     console.log(event)

    //     previewDiv.style.display= "block"
    //     previewDiv.style.position='fixed';
    //     previewDiv.style.top= 100+ "px";
    //     previewDiv.style.left= 100 + "px";
    //   }
    // }
  }
}



