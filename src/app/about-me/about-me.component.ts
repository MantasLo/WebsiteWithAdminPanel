import { Component, OnInit } from '@angular/core';
import { APIEMANE } from 'src/apie-mane.db' 
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  allcontent = APIEMANE;

  title = 'Apie trenerį:';

  constructor(private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Tarptautinės kategorijos dresūros teisėjas, Lietuvos Kinologų Draugijos dresuotojas. Ruošia šunis pagal BH-VT, IGP, Obedience programas. Sprendžia su šunų auklėjimu iškilusias problemas. ' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'place' },
      { name: 'og:site_name', content: 'index, follow' },
      { name: 'og:title', content: 'Apie trenerį: ' },
      { name: 'og:description', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: '/assets/Rakštis Laukinė Orchidėja.jpg' },
      { name: 'og:url', content: 'http://www.laukineorchideja.lt' },
      { name: 'description', content: 'Tarptautinės kategorijos dresūros teisėjas, Lietuvos Kinologų Draugijos dresuotojas. Ruošia šunis pagal BH-VT, IGP, Obedience programas. Sprendžia su šunų auklėjimu iškilusias problemas. ' }
    ]);
  }

}
