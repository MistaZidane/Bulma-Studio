import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CodeService {
  public codeData: string;
  constructor() { }
  set htmlCode(value: string){
   this.codeData = value
  }
  get htmlCode(): string{
    return this.codeData;
  }

}
