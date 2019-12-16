import { Component, OnInit } from '@angular/core';
import { SizeService } from '../../shared/size.service';
import { DataService } from '../../shared/data.service';
import { StateService } from '../../shared/state.service';
import { RightPanelService } from '../../shared/right-panel.service';
import { CodeService } from '../../shared/code.service'
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
  public clickedElement = [];
  // when should focus show
  public focusState = true;
  // to show elemnt path
  public elementPath = [];
  // path event
  public pathEvent: any;
  public frameData = []
  constructor(private size: SizeService, private data: DataService, private iframeState: StateService, private rightPanelData: RightPanelService, private code:CodeService) {
    // perant methods setup so iframe could access the methods here
    (<any>window).drop = this.drop.bind(this);
    (<any>window).dragover = this.dragover.bind(this);
    (<any>window).mouseover = this.mouseover.bind(this);

  }


  ngOnInit() {

    //setting the iframe data
    let iframe = <HTMLElement>document.querySelector('#iframe');
    let frame = (<HTMLIFrameElement>iframe).contentWindow;
    // my link
    let myLink = document.createElement('link');
    myLink.setAttribute('href', './assets/framebody.css');
    myLink.setAttribute('rel', 'stylesheet');
    // creating the bulma css link
    let bulmaLink = document.createElement('link');
    // the animate css link
    let animateLink = document.createElement('link');
    bulmaLink.setAttribute('href', './assets/bulma/bulma.min.css');
    // attributing animate link
    animateLink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css');
    bulmaLink.setAttribute('rel', 'stylesheet');
    animateLink.setAttribute('rel', 'stylesheet');
    // appending the link to the head
    frame.document.querySelector('head').appendChild(bulmaLink)
    frame.document.querySelector('head').appendChild(animateLink)
    frame.document.querySelector('head').appendChild(myLink);
    let framebody = <HTMLElement>frame.document.querySelector('body');
    // when you click the save button in the code component when the iframe component is loading again the data is set
    if( this.code.codeData != undefined){
        framebody.innerHTML = this.code.codeData;
    }
  
    this.iframeState.frameData$.subscribe(value => {
      // making sure that the value of the frame is not underfined
      if (value == undefined) {
        return
      }
      else {
        framebody.innerHTML = value.toString()

      }

    })
    // framebody.innerHTML = this.iframeState.redo_undoData;

    // adding the mouseover event
    framebody.setAttribute('onmouseover', 'parent.mouseover(event)')
    // adding the ondrag event in the iframe and letting it access the parent window
    framebody.setAttribute('ondrop', 'parent.drop(event)')
    framebody.setAttribute('ondragover', 'parent.dragover(event)')
    framebody.style.backgroundColor = "white";
 
    ////////////////////////////////////////////
    let mutations = new MutationObserver((data) => {
      data.forEach( (mutation)=>{
        this.code.codeData = framebody.innerHTML;
      });
    });
    mutations.observe(framebody, {
      attributes: true,
      subtree: true,
      childList: true,
      characterData: true,
      characterDataOldValue: true
    })
    // setting the size of the iframe
    this.size.sizze$.subscribe(data => {
      this.output = data;
      if (data["state"] == "true") {
        let iframe = <HTMLElement>document.querySelector('#iframe');
        iframe.setAttribute('width', this.output['x']);
        // iframe.setAttribute('height', this.output['y']);
        iframe.style.height = this.output['y']
      }
    });

    // when the focus bar is double clicked
    let focus = <HTMLElement>document.querySelector('#focus')
    let info = <HTMLElement>document.querySelector('#info');




    // hidden the focus bar
    framebody.addEventListener('mouseout', () => {
      focus.style.display = 'none';
      info.style.display = 'none';
    })


    framebody.addEventListener('mousemove', (event) => {
      //  if(event.target.localName == 'body'){
      //    console.log('dfvb')
      //  } 
    })


    // for displaying the clickable focus bar
    framebody.addEventListener('click', (event) => {
      event.preventDefault()
 
      // working with the click focus bar
      this.clickedElement.push(event.target);
      this.rightPanelData.edditedElement = event.target;
      let element = <HTMLElement>event.target;
      let coordinates = this.clickedElement[this.clickedElement.length - 1].getBoundingClientRect();
      let coor = iframe.getBoundingClientRect();
      let clickFocus = <HTMLElement>document.querySelector('#clickFocus')
      let clickInfo = <HTMLElement>document.querySelector('#clickInfo')
      clickFocus.style.height = coordinates.height + "px";
      clickFocus.style.width = coordinates.width + "px";
      clickFocus.style.top = (coordinates.top + coor.top) + "px";
      clickFocus.style.left = (coordinates.left + coor.left) + "px";
      clickInfo.style.height = info.style.height;
      clickFocus.style.display = 'block';
      clickInfo.style.display = 'grid';
      clickInfo.style.height = info.style.height;
      clickInfo.style.top = (coordinates.top + coor.top - 26) + "px";
      clickInfo.style.left = (coordinates.left + coor.left) + "px";
      frame.addEventListener('scroll', () => {
        coor = iframe.getBoundingClientRect();
        let currentCoordinates = this.clickedElement[this.clickedElement.length - 1].getBoundingClientRect();
        clickFocus.style.top = (currentCoordinates.top + coor.top) + "px";
        clickFocus.style.left = (currentCoordinates.left + coor.left) + "px";
        clickInfo.style.top = (currentCoordinates.top + coor.top) - 26 + "px";
        clickInfo.style.left = (currentCoordinates.left + coor.left) + "px";
        // clickFocus.style.display = 'none';
        // clickInfo.style.display = 'none';
        // dont show the focus bar on scroll
        focus.style.display = 'none';
        info.style.display = 'none';
      })
    }, true);



    // deleting the current element
    let clickFocus = <HTMLElement>document.querySelector('#clickFocus');
    let clickInfo = <HTMLElement>document.querySelector('#clickInfo')
    let del = <HTMLElement>document.querySelector('#delete');
    del.addEventListener('click', (event) => {
      event.preventDefault();
      clickFocus.style.display = 'none';
      clickInfo.style.display = 'none';
      // deleting the element
      // dont delette the body
      if (this.clickedElement[this.clickedElement.length - 1].nodeName == 'BODY') {
        // do nothing
      }
      else {
        this.clickedElement[this.clickedElement.length - 1].parentNode.removeChild(this.clickedElement[this.clickedElement.length - 1]);
        // sending the data to enable redo and undo
        // this.iframeState.iframeStateData = framebody.innerHTML;
      }

    })



    // duplicating elements
    let duplicate = document.querySelector('#duplicate');
    duplicate.addEventListener('click', (event) => {
      event.preventDefault();
      clickFocus.style.display = 'none';
      clickInfo.style.display = 'none';
      let parent = this.clickedElement[this.clickedElement.length - 1].parentNode;
      let clonedNode = this.clickedElement[this.clickedElement.length - 1].cloneNode(true)
      parent.insertBefore(clonedNode, this.clickedElement[this.clickedElement.length - 1].nextSibling);
      // this.iframeState.iframeStateData = framebody.innerHTML;
    })
    // dont show the clickfocus after the dellete has taken place
    clickFocus.style.display = 'none'





    // making it posible for us to edit text
    let edit = document.querySelector('#edit');
    edit.addEventListener('click', (event) => {
      clickFocus.style.display = 'none';
      clickInfo.style.display = 'none';
      event.preventDefault();
      // setting focus state to false
      this.focusState = false;
      // adding the contenteditable attribute
      this.clickedElement[this.clickedElement.length - 1].setAttribute('contenteditable', 'true');
      // making it auto focus when you click the edit icon
      this.clickedElement[this.clickedElement.length - 1].focus();
      // adding an event listener to remove the contenteditable attribute
      this.clickedElement[this.clickedElement.length - 1].addEventListener('blur', () => {
        this.clickedElement[this.clickedElement.length - 1].removeAttribute('contenteditable');
        // on blur setting focus state to true 
        this.focusState = true;
      })
    });


    // selecting parent
    let parentSelector = document.querySelector('#parent');
    parentSelector.addEventListener('click', (e) => {
      e.preventDefault();
      let parentElementt = <HTMLElement>this.clickedElement[this.clickedElement.length - 1].parentElement;
      this.clickedElement.push(parentElementt)
      this.clickedElement.shift();
      parentElementt.click();
    })


    // moving element down
    let moveDown = document.querySelector('#moveDown');
    moveDown.addEventListener('click', (e) => {
      e.preventDefault();
      // clone the node first
      try {
        let clonedNode = this.clickedElement[this.clickedElement.length - 1].cloneNode(true)
        let parentElementt = <HTMLElement>this.clickedElement[this.clickedElement.length - 1].parentElement;
        let nextElement = <HTMLElement>this.clickedElement[this.clickedElement.length - 1].nextElementSibling;
        parentElementt.insertBefore(clonedNode, nextElement.nextElementSibling);
        parentElementt.removeChild(this.clickedElement[this.clickedElement.length - 1]);
        clickFocus.style.display = 'none';
        clickInfo.style.display = 'none';
        // clicking the node
        clonedNode.click()
      }
      catch{ }
    })
    // moving element up
    let moveUp = document.querySelector('#moveUp');
    moveUp.addEventListener('click', (e) => {
      e.preventDefault();
      try {
        let clonedNode = this.clickedElement[this.clickedElement.length - 1].cloneNode(true)
        let parentElementt = <HTMLElement>this.clickedElement[this.clickedElement.length - 1].parentElement;
        let previousElement = <HTMLElement>this.clickedElement[this.clickedElement.length - 1].previousElementSibling;
        parentElementt.insertBefore(clonedNode, previousElement.previousElementSibling);
        parentElementt.removeChild(this.clickedElement[this.clickedElement.length - 1]);
        clickFocus.style.display = 'none';
        clickInfo.style.display = 'none';
        // clicking the node
        clonedNode.click()
      }
      catch{ }
    })





    // making it posible for us to edit text through dblclick
    framebody.addEventListener('dblclick', (event) => {
      clickFocus.style.display = 'none';
      clickInfo.style.display = 'none';
      info.style.display = 'none';
      let element = <HTMLElement>event.target;
      // adding the contenteditable attribute
      element.setAttribute('contenteditable', 'true');
      // making it auto focus when you click the edit icon
      element.focus();
      // setting focus state to false
      this.focusState = false;
      // adding an event listener to remove the contenteditable attribute
      element.addEventListener('blur', () => {
        element.removeAttribute('contenteditable');
        // on blur setting focus state to true
        this.focusState = true;
      })
    })





    // tracking the window resize to update the click focus bar
    frame.addEventListener('resize', () => {

      let element = <HTMLElement>this.clickedElement[this.clickedElement.length - 1];
      // so that even wen resizing without selecting and element
      if (element != undefined) {
        let currentCoordinates = element.getBoundingClientRect();
        let coor = iframe.getBoundingClientRect();
        clickFocus.style.top = (currentCoordinates.top + coor.top) + "px";
        clickFocus.style.left = (currentCoordinates.left + coor.left) + "px";
        clickInfo.style.top = (currentCoordinates.top + coor.top) - 26 + "px";
        clickInfo.style.left = (currentCoordinates.left + coor.left) + "px";
        clickInfo.style.height = info.style.height;
        clickFocus.style.width = currentCoordinates.width + 'px';
        clickFocus.style.height = currentCoordinates.height + 'px';
      }

    })
  }



  // preventing deafault to enable dropping
  dragover(event) {
    event.preventDefault()
    // shows the line on dragover
    let coordinates = event.target.getBoundingClientRect();
    let iframe = <HTMLElement>document.querySelector('#iframe');
    let coor = iframe.getBoundingClientRect();
    let line = <HTMLElement>document.querySelector('#line');
    // line.style.width = coordinates.width + "px";
    // line.style.backgroundColor = 'blue';
    // line.style.top = (coordinates.top + coor.top) + "px";
    // line.style.left = (coordinates.left + coor.left) + "px";
    // line.style.display = 'block';
    let info = <HTMLElement>document.querySelector('#info');

    // calling the mouseover event in the dragover method to show us where the dragover is
    // this.mouseover(event);
  }




  // dropping event on iframe
  drop(event) {
    event.preventDefault();
    // stop the line from showing
    let line = <HTMLElement>document.querySelector('#line');
    line.style.display = 'none';
    // setiing up the dropable data
    let iframe = document.querySelector('#iframe');
    let frame = (<HTMLIFrameElement>iframe).contentWindow;
    let framebody = <HTMLElement>frame.document.querySelector('body');
    // creating the css link
    event.target.innerHTML += this.data.recievedData;
    // this.iframeState.iframeStateData = framebody.innerHTML;
    line.style.display = 'none'
    // let element = event.target.getBoundingClientRect();
    // let prev = event.target.previousElementSibling.getBoundingClientRect();
    // let next = event.target.nextElementSibling.getBoundingClientRect();
    // console.log(prev, 'prev');
    // console.log(next, 'next');
    // console.log(element, 'cure');
    // console.log('cu - prev', element.top- prev.top);
    // console.log('cu - next', element.top- next.top);

  }





  // for showing the location an element targeted on mousee over
  mouseover(event) {
    event.preventDefault()
    let iframe = <HTMLElement>document.querySelector('#iframe');
    let frame = (<HTMLIFrameElement>iframe).contentWindow;
    // setting up the focus bar
    let focus = <HTMLElement>document.querySelector('#focus')
    let info = <HTMLElement>document.querySelector('#info')
    let coordinates = event.target.getBoundingClientRect();
    let coor = iframe.getBoundingClientRect();
    focus.style.height = coordinates.height + "px";
    focus.style.width = coordinates.width + "px";
    focus.style.top = (coordinates.top + coor.top) + "px";
    focus.style.left = (coordinates.left + coor.left) + "px";
    focus.style.zIndex = '99999';
    // focus state to show or hide
    if (this.focusState == true) {
      focus.style.display = 'block';
      info.style.display = 'inline'
    }
    info.style.top = (parseInt(coordinates.top + coor.top) - 16) + "px";
    info.style.left = (coordinates.left + coor.left) + "px";
    if (event.target.classList == '') {
      info.innerHTML = event.target.localName;
    }
    else if (event.target.classList !== '') {
      info.innerHTML = event.target.classList;
    }
  }

}

