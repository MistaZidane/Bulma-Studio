import { Component, OnInit } from '@angular/core';
import { SizeService } from '../../shared/size.service';
import { DataService } from '../../shared/data.service';
import { StateService } from '../../shared/state.service';
import { RightPanelService } from '../../shared/right-panel.service';
@Component({
  selector: 'app-iframe-panel',
  templateUrl: './iframe-panel.component.html',
  styleUrls: ['./iframe-panel.component.css']
})
export class IframePanelComponent implements OnInit {
  public output: {}
  public borders;
  public stateArray: [];
  public stateObject: []
  public iframeData;
  // the current element in the focus bar
  public currentEvent;
  public clickedElement=[];
 
  constructor(private size: SizeService, private data: DataService, private iframeState: StateService, private rightPanel:RightPanelService) {
    // perant methods setup so iframe could access the methods here
    (<any>window).drop = this.drop.bind(this);
    (<any>window).dragover = this.dragover.bind(this);
    (<any>window).mouseover = this.mouseover.bind(this);
    (<any>window).mouseleave = this.mouseleave.bind(this);
   
  }


  ngOnInit() {
    //setting the iframe data
    let iframe = <HTMLElement> document.querySelector('#iframe');
    let frame = (<HTMLIFrameElement>iframe).contentWindow;
    // creating the css link
    let link = document.createElement('link')
    link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css')
    link.setAttribute('rel', 'stylesheet');
    // appending the link to the head
    let csslink = frame.document.querySelector('head').appendChild(link)
    let framebody = <HTMLElement> frame.document.querySelector('body');

     this.iframeState.frameData$.subscribe(value=>{
       // making sure that the value of the frame is not underfined
       if(value== undefined){
          return
       }
       else{
         framebody.innerHTML = value.toString()
        
       }
       
     })
      // framebody.innerHTML = this.iframeState.redo_undoData;
    
    // adding the mouseover event
    framebody.setAttribute('onmouseover', 'parent.mouseover(event)')
    framebody.setAttribute('onmouseleave', 'parent.mouseleave(event)')
    // adding the ondrag event in the iframe and letting it access the parent window
    framebody.setAttribute('ondrop', 'parent.drop(event)')
    framebody.setAttribute('ondragover', 'parent.dragover(event)')
    framebody.style.backgroundColor = "white";
    framebody.addEventListener('click', function (e) {
      e.preventDefault();
     
      
    })
  

    // setting the size of the iframe
    this.size.sizze$.subscribe(data => {
      this.output = data;
      if (data["state"] == "true") {
        let iframe = <HTMLElement> document.querySelector('#iframe');
        iframe.setAttribute('width', this.output['x']);
        // iframe.setAttribute('height', this.output['y']);
        iframe.style.height = this.output['y']
      }
    });


    // showing textform for the text of elemnts to be editted 
    framebody.addEventListener('dblclick', function (event) {
      event.preventDefault()
      // checking to see that the target is not the body
      if (event.target != framebody) {
        if (event.type == 'dblclick') {
          // creating the texarea that will show up
          let input = document.createElement('input');
          input.style.display = "none"
          console.log(event)
          let currentElement = <HTMLElement>event.target
          // the elements textContent should not be empty
          if (currentElement.textContent !== '') {
            // check to see if the element does not have chilldnodes
            if(currentElement.children.length == 0){
            input.style.position = 'absolute';
            input.style.zIndex = '4'
            input.style.border = currentElement.style.border;
            // getting computed styles to use for the input appearance 
            let rect = currentElement.getBoundingClientRect();
            let style = window.getComputedStyle(currentElement, 'before')
            input.style.font = style.font
            input.style.boxShadow = ` 0 0 2px #3273dc`
            input.style.textAlign = style.textAlign;
            input.style.width = rect.width + 'px';
            input.style.height = rect.height + 'px';
            input.style.minWidth = 20 + 'px';
            input.style.minHeight = 10 + 'px';
            input.style.zIndex = '99999'
            input.style.left = rect.left + "px";
            input.style.top = rect.top + 'px';
            input.value = currentElement.textContent;
            input.style.display = 'block';
            // appending the input field
            framebody.appendChild(input);
            // making the input to focus     
            input.focus()
            input.select()
            // interchanging the data on blur
            input.addEventListener('blur', function (e) {
              e.preventDefault()
              if (e.type == 'blur') {
                currentElement.textContent = input.value;
                framebody.removeChild(input)
              }
              else {
                framebody.removeChild(input)
              }
            })
            }
          }
        }
      }
    });
    // when the focus bar is double clicked
    let focus =<HTMLElement> document.querySelector('#focus')
    let info = <HTMLElement>document.querySelector('#info')
    focus.addEventListener('dblclick',()=>{
      // making a false dblclick on the element to call the dblclick element
      var event = new MouseEvent('dblclick', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
    this.currentEvent.dispatchEvent(event);
    })
    // for displaying the clickable focus bar
    focus.addEventListener('click',()=>{
      let clickFocus =<HTMLElement> document.querySelector('#clickFocus')
    let clickInfo = <HTMLElement>document.querySelector('#clickInfo')
    // setting the neccesary styles
    clickFocus.style.height = focus.style.height;
    clickFocus.style.width = focus.style.width;
    clickFocus.style.top = focus.style.top;
    clickFocus.style.left = focus.style.left;
    clickFocus.style.display = 'block';;
    clickInfo.style.height = info.style.height;
    clickInfo.style.width = info.style.width;
    clickInfo.style.top = info.style.top;
    clickInfo.style.left = info.style.left;
    focus.style.display = 'none'
    this.clickedElement.push(this.currentEvent);
    // this is to update the clicked focus element on window scroll
    frame.addEventListener('scroll',()=>{
      console.log('dv')
      let coordinates = this.clickedElement[this.clickedElement.length-1].getBoundingClientRect();
      let coor =  iframe.getBoundingClientRect();
      clickFocus.style.height = coordinates.height + "px";
      clickFocus.style.width = coordinates.width + "px";
      clickFocus.style.top = (coordinates.top + coor.top) + "px"; 
      clickFocus.style.left = (coordinates.left + coor.left)+ "px";
      clickInfo.style.width = coordinates.width + "px"; 
      clickInfo.style.top = (parseInt(coordinates.top + coor.top)-16) + "px";
      clickInfo.style.left = (coordinates.left + coor.left) + "px";
    })
    });
    // deleting the current element
    let clickFocus = <HTMLElement> document.querySelector('#clickFocus');
    let del = <HTMLElement> document.querySelector('#delete');
    del.addEventListener('click',(event)=>{
      event.preventDefault();
      // deleting the element
      // dont delette the body
      if(this.clickedElement[this.clickedElement.length-1].nodeName== 'BODY'){
        // do nothing
      }
      else{
         this.clickedElement[this.clickedElement.length-1].parentNode.removeChild(this.clickedElement[this.clickedElement.length-1]);
         // sending the data to enable redo and undo
         this.iframeState.iframeStateData=framebody.innerHTML;
      }
 
    })
     // dont show the clickfocus after the dellete has taken place
    // clickFocus.style.display = 'none'
    clickFocus.addEventListener('click',()=>{
      clickFocus.style.display = 'none'
    })

  
    
  }



  // preventing deafault to enable dropping
  dragover(event) {
    event.preventDefault()
    // shows the line on dragover
    let coordinates = event.target.getBoundingClientRect();
    let iframe = <HTMLElement> document.querySelector('#iframe');
    let coor =  iframe.getBoundingClientRect();
    let line =<HTMLElement> document.querySelector('#line');
    // line.style.top = (coordinates.top + coor.top) + "px"; 
    // line.style.left = (coordinates.left + coor.left)+ "px";
    // line.style.display = 'block';
    if(event.target.textContent == ''){
    //  line.style.width = (coordinates.width) + "px";
    } 
    else{
      console.log('not good')
    }
    

  }


  // dropping event on iframe
  drop(event) {
    event.preventDefault();
    // stop the line from showing
    let line =<HTMLElement> document.querySelector('#line');
    line.style.display = 'none';
    // setiing up the dropable data
    let iframe =  document.querySelector('#iframe');
    let frame = (<HTMLIFrameElement>iframe).contentWindow;
    let framebody =<HTMLElement> frame.document.querySelector('body');
    // creating the css link
    event.target.innerHTML += this.data.recievedData;
    this.iframeState.iframeStateData=framebody.innerHTML;
  }




  // for showing the location an element targeted on mousee over
  mouseover(event){ 
    event.preventDefault()

  let iframe = <HTMLElement> document.querySelector('#iframe');
  let frame = (<HTMLIFrameElement>iframe).contentWindow;
  let framebody = frame.document.querySelector('body');
 
// setting up the focus bar
// let focus =<HTMLElement> frame.document.querySelector('#focus')
// let info = <HTMLElement>frame.document.querySelector('#info')
let focus =<HTMLElement> document.querySelector('#focus')
let info = <HTMLElement>document.querySelector('#info')
let coordinates = event.target.getBoundingClientRect();
// try code
let coor =  iframe.getBoundingClientRect();
focus.style.height = coordinates.height + "px";
focus.style.width = coordinates.width + "px";
focus.style.top = (coordinates.top + coor.top) + "px"; 
focus.style.left = (coordinates.left + coor.left)+ "px";
let computedStyles = frame.getComputedStyle(event.target,'');
focus.style.zIndex = '99999';
focus.style.display = 'block';
info.style.width = coordinates.width + "px"; 
info.style.top = (parseInt(coordinates.top + coor.top)-16) + "px";
info.style.left = (coordinates.left + coor.left) + "px";
if(event.target.classList == ''){ 
  info.innerHTML = event.target.localName;
}
else if(event.target.classList !== ''){
   info.innerHTML = event.target.classList;
 }
 focus.addEventListener('mousemove',(evv)=>{
    evv.preventDefault() 
focus.style.display = 'none'; 
},true); 
this.currentEvent = event.target; 

}
mouseleave(event){
  // let focus =<HTMLElement> document.querySelector('#focus')
  // focus.style.display = 'none'
  
}


}

