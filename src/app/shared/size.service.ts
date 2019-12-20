import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  private _size = {
    'state': ''
  };

  private _sizeSource = new Subject<object>();
  constructor() { }

  sizze$ = this._sizeSource.asObservable();
  iframeSize(dara: object) {
    this._sizeSource.next(dara);

  }

}
