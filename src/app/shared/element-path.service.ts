import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementPathService {
private _path = []
private _pathSource = new Subject<object>();
  constructor() { }
  path$ = this._pathSource.asObservable();
  elementPath(dara: object) {
    this._pathSource.next(dara);

  }
}
// element path service
