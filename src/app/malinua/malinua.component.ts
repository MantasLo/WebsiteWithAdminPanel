import { Component, OnInit } from '@angular/core';
import { MALINUA } from 'src/malinua.db';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-malinua',
  templateUrl: './malinua.component.html',
  styleUrls: ['./malinua.component.scss']
})
export class MalinuaComponent implements OnInit {

  content = MALINUA;
  title = 'Malinua';

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Belgų aviganis Malinua yra energingas ir aktyvus šuo, be galo atsidavęs šeimininkui ir jo šeimos nariams. Malinua tai universaliausias šuo pasaulyje.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'place' },
      { name: 'og:site_name', content: 'index, follow' },
      { name: 'og:title', content: 'Apie trenerį: ' },
      { name: 'og:description', content: 'Belgų aviganis Malinua yra energingas ir aktyvus šuo, be galo atsidavęs šeimininkui ir jo šeimos nariams. Malinua tai universaliausias šuo pasaulyje.' },
      { name: 'og:image', content: '/assets/Rakštis Laukinė Orchidėja.jpg' },
      { name: 'og:url', content: 'http://www.laukineorchideja.lt' },
      { name: 'description', content: 'Belgų aviganis Malinua yra energingas ir aktyvus šuo, be galo atsidavęs šeimininkui ir jo šeimos nariams. Malinua tai universaliausias šuo pasaulyje.' }
    ]);
  }
}
