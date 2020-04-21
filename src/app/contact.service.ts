import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: boolean = false;

  constructor() { }

  contactButtonPressed(){
    this.contact = true;
  }

  afterScroll(){
    this.contact = false;
  }

  getContact(){
    return this.contact;
  }
}
