import { Component, OnInit } from '@angular/core';
import { GALERIJA } from 'src/galerija.db' 
import { Card } from 'src/app/model/card';


@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.scss']
})
export class GalerijaComponent implements OnInit {
  allcontent = GALERIJA;

  //allcontent = [];

  constructor() { }

  ngOnInit() {
  }

  p:any;

  // items = [];

  onCardSelected(card: Card){

    
    //window.location.href = _url;

    //make hyperlink here
  }
}
