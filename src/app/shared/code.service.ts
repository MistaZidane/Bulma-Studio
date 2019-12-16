import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CodeService {
  public _code: any;
  private _codeSource = new Subject<string>();
  constructor() { }
framebody$ = this._codeSource.asObservable();
iframeBodyElement(dara: any) {
  this._codeSource.next(dara);
}
}
