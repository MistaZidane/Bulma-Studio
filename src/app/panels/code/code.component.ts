import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }
 public codeHtml = ``;
  ngOnInit() {
    setTimeout(() => {
       this.codeHtml = localStorage.getItem("frameData");
    }, 200);
  }
  // saving the code html back
  save(){
    // this.code.codeData = document.querySelector('code').innerText;
    localStorage.setItem("frameData", document.querySelector('code').innerText);
  }

}
