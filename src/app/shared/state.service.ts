import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateService {
  public _state: string;
  public _iframeContent = []
 

  private _dataSource = new Subject<string>();
  constructor() { }
  

get iframeStateData():string{
  return this._state
}
// undo and redo data
// use to send data in the _iframecontent array
set iframeStateData(value: string){
  this._state = value
  this._iframeContent.push(this._state)
}
frameData$ = this._dataSource.asObservable();
iframedata(dara: string) {
  this._dataSource.next(dara);
}

}
