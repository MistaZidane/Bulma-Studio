import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RightPanelService {
private element: any;
  constructor() { }
  get edditedElement(): any{
    return this.element;
  }
  set edditedElement(value: any){
    this.element = value;
  }
}
