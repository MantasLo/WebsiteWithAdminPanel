import { Component, OnInit, ViewChild } from '@angular/core';
import { EDUKACINESPROGRAMOS} from 'src/edukacines-programos.db';
import { CarouselComponent } from 'ngx-carousel-lib';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-edukacines-programos',
  templateUrl: './edukacines-programos.component.html',
  styleUrls: ['./edukacines-programos.component.scss']
})
export class EdukacinesProgramosComponent implements OnInit {

  allcontent = EDUKACINESPROGRAMOS;
  // itemA = EDUKACINESPROGRAMOS.title1;
  // itemB = EDUKACINESPROGRAMOS.title2;
  // itemC = EDUKACINESPROGRAMOS.title3;

  title = 'Edukacinės programos';

  clicked1: boolean = true;
  clicked2: boolean = false;
  clicked3: boolean = false;
  clicked4: boolean = false;
  clicked5: boolean = false;
  clicked6: boolean = false;
  clicked7: boolean = false;
  clicked8: boolean = false;


  public images = [
    // "11111111111111111",
    // "22222222222222",
    // "333333333333333333",
    // "44444444444444444444"
  ];

  // slides = [
  //   {img: 'asddfs'},
  //   {img: 'asfsadffdsaff'},
  //   {img: 'asfsadffdsaff'},
  //   {img: 'asfsadffdsaff'}
  // ];
  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  // addSlide() {
  //   this.slides.push({img: 'asfsadffdsaff'});
  //   console.log(this.slides);
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  // slickInit(e) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e) {
  //   console.log('breakpoint');
  // }
  
  // afterChange(e) {
  //   console.log('afterChange');
  // }
  
  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

  @ViewChild('topCarousel', {static: false}) topCarousel: CarouselComponent;
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

    if(this.allcontent[0].listItem1.length > 0){
    this.images.push(this.allcontent[0].listItem1);
    }
    if(this.allcontent[0].listItem2.length > 0){
    this.images.push(this.allcontent[0].listItem2);
    }
    if(this.allcontent[0].listItem3.length > 0){
    this.images.push(this.allcontent[0].listItem3);
    }
    if(this.allcontent[0].listItem4.length > 0){
    this.images.push(this.allcontent[0].listItem4);
    }
    if(this.allcontent[0].listItem5.length > 0){
    this.images.push(this.allcontent[0].listItem5);
    }
    if(this.allcontent[0].listItem6.length > 0){
    this.images.push(this.allcontent[0].listItem6);
    }
    if(this.allcontent[0].listItem7.length > 0){
    this.images.push(this.allcontent[0].listItem7);
    }
    if(this.allcontent[0].listItem8.length > 0){
    this.images.push(this.allcontent[0].listItem8);
    }
    if(this.allcontent[0].listItem9.length > 0){
    this.images.push(this.allcontent[0].listItem9);
    }
    if(this.allcontent[0].listItem10.length > 0){
    this.images.push(this.allcontent[0].listItem10);
    }
    if(this.allcontent[0].listItem11.length > 0){
    this.images.push(this.allcontent[0].listItem11);
    }
    if(this.allcontent[0].listItem12.length > 0){
      this.images.push(this.allcontent[0].listItem12);
    }

    //console.log(this.images);
    //console.log(this.allcontent[0].listItem1);
  }


  prev() {
    this.topCarousel.slidePrev();
  }
  next() {
    this.topCarousel.slideNext();
  }

  Clicked(button: number){
    if(button == 1){
      this.clicked1 = true;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;
    }

    if(button == 2){
      this.clicked1 = false;
      this.clicked2 = true;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;
    }

    if(button == 3){
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;
    }
    if(button == 4){
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = true;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;
    }
    if(button == 5){
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = true;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = false;
    }
    if(button == 6){
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = true;
      this.clicked7 = false;
      this.clicked8 = false;
    }
    if(button == 7){
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = true;
      this.clicked8 = false;
    }
    if(button == 8){
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = false;
      this.clicked4 = false;
      this.clicked5 = false;
      this.clicked6 = false;
      this.clicked7 = false;
      this.clicked8 = true;
    }
  }

  constructor(private titleService: Title,
    private metaTagService: Meta) { }
}
