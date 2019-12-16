import { Component, OnInit } from '@angular/core';

import 'highlight.js/styles/mono-blue.css';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }
 public code = `<select class="" id="width" >
 <option value="block">Block</option>
 <option value="inline">Inline</option>
 <option value="inline-block">Inline-block</option>
 <option value="none">None</option>
 <option value="flex">Flex</option>
 <option value="grid">Grid</option>
</select>`
  ngOnInit() {


  }

}
