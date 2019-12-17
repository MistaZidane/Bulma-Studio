import { Component, OnInit } from '@angular/core';
import { SizeService } from '../../../shared/size.service';
@Component({
  selector: 'app-left-toolbar',
  templateUrl: './left-toolbar.component.html',
  styleUrls: ['./left-toolbar.component.css']
})
export class LeftToolbarComponent implements OnInit {
  public smartphone = true;
  public tab = true;
  public lap = false;
  public des = true;
  constructor(private size: SizeService) { }

  ngOnInit() {

  }
  phone() {
    let data = {
      "y": '842px',
      "x": '325px',
      'state': 'true'
    }
    this.smartphone= false;
    this.tab= true;
    this.lap= true;
    this.des= true;
    this.size.iframeSize(data)
  }
  tablet() {
    let data = {
      "y": '842px',
      "x": '668px',
      'state': 'true'
    }
    this.size.iframeSize(data)
    this.smartphone= true;
    this.tab= false;
    this.lap= true;
    this.des= true;
  }
  laptop() {
    let data = {
      "x": '85%',
      "y": '842px',
      'state': 'true'
    }
    this.size.iframeSize(data)
    this.smartphone= true;
    this.tab= true;
    this.lap= false;
    this.des= true;
  }
  dextop() {
    let data = {
      "x": '95%',
      "y": '942px',
      'state': 'true'
    }
    this.size.iframeSize(data)
    this.smartphone= true;
    this.tab= true;
    this.lap= true;
    this.des= false;
  }
  // testing upload
  upload(event){
    // let img = <HTMLImageElement> document.querySelector('#img');
    // let file = event.target.files[0];
    // const fileread = new FileReader();
    // fileread.onload = (e)=>{
    //  console.log(e.target.result)
    // //  img.setAttribute('src', e.target.result);
    // }
    // fileread.readAsDataURL(file);
  }
}
