import { Component, OnInit } from '@angular/core';
import { CodeService} from '../../shared/code.service'

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor(private code:CodeService) { }
 public codeHtml = `<select class="" id="width" >
 <option value="block">Block</option>
 <option value="inline">Inline</option>
 <option value="inline-block">Inline-block</option>
 <option value="none">None</option>
 <option value="flex">Flex</option>
 <option value="grid">Grid</option>
</select>`
  ngOnInit() {
   this.codeHtml = this.code.codeData;
  }
  // saving the code html back
  save(){
    this.code.codeData = document.querySelector('code').innerText
  }

}
