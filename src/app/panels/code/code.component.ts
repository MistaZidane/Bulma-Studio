import { Component, OnInit } from '@angular/core';
import { CodeService} from '../../shared/code.service'

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor(private code:CodeService) { }
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
