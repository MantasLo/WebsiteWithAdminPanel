import { Component, OnInit } from '@angular/core';
import { KANITERAPIJA } from 'src/kaniterapija.db';

@Component({
  selector: 'app-kaniterapija',
  templateUrl: './kaniterapija.component.html',
  styleUrls: ['./kaniterapija.component.scss']
})
export class KaniterapijaComponent implements OnInit {

  allcontent = KANITERAPIJA;

  constructor() { }

  ngOnInit() {
    
  }

}
