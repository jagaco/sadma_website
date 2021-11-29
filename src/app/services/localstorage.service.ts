import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MylocalStorageService {

  constructor() { }

  get( key : any)
  {
    return key;
  }

  set( key : any, value : any)
  {
    return key;
  }

  remove( key : any)
  {
    return key;
  }
}
}
