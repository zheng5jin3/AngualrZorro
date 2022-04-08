import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  setItem(key,value) {
    localStorage.setItem(key,value);
  }

  getItem(key) {
    localStorage.getItem(key);
  }

  removeItem(key){
    localStorage.removeItem(key);
  }
}

