import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
 
  private _drawer:boolean;

  private _drawerource = new Subject<boolean>();
  constructor() { }

  state$ = this._drawerource.asObservable();
  drawerState(dara: boolean) {
    this._drawerource.next(dara);
  }
}
