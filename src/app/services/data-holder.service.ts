import { Injectable } from '@angular/core';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  user:User |undefined;

  constructor() { }
  saveData(user:User){   
    this.user =user;
  }
  getData(){
    return this.user;
  }
}
