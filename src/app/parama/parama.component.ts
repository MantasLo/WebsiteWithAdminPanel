import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parama',
  templateUrl: './parama.component.html',
  styleUrls: ['./parama.component.scss']
})
export class ParamaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  linkTo(str: string){
    var _url = str;
    console.log(_url);
    window.open(_url, '_blank');
  }
}
