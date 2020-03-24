import { Component, OnInit, Output, EventEmitter, Inject, PLATFORM_ID, Input, ViewChild } from '@angular/core';
import { Image, AccessibilityConfig, ImageEvent } from '@ks89/angular-modal-gallery';
import { isPlatformBrowser, isPlatformServer, DOCUMENT } from '@angular/common';
import { Card } from 'src/app/model/card';
import { ActivatedRoute } from '@angular/router';
import { GalerijaService } from '../galerija.service';
import { Title } from '@angular/platform-browser';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import reframe from 'reframe.js';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input()
  card: Card;

  id : number;
  title: string;
  category: string;
  isBrowser;

  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];


  @Output()
  itemSelected = new EventEmitter<Card>();

  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
  private activatedRoute: ActivatedRoute, 
  private service: GalerijaService,
  private titleService: Title
    ) { 
      this.isBrowser = isPlatformBrowser(platformId);
    }
    onPlayerStateChange(event) {
      console.log(event)
      switch (event.data) {
        case window['YT'].PlayerState.PLAYING:
          if (this.cleanTime() == 0) {
            console.log('started ' + this.cleanTime());
          } else {
            console.log('playing ' + this.cleanTime())
          };
          break;
        case window['YT'].PlayerState.PAUSED:
          if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
            console.log('paused' + ' @ ' + this.cleanTime());
          };
          break;
        case window['YT'].PlayerState.ENDED:
          console.log('ended ');
          break;
      };
    };
    //utility
    cleanTime() {
      return Math.round(this.player.getCurrentTime())
    };
    onPlayerError(event) {
      switch (event.data) {
        case 2:
          console.log('' + this.video)
          break;
        case 100:
          break;
        case 101 || 150:
          break;
      };
    };
    

    

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const description = params.description;
     this.service.getProject(description).subscribe(a => {
       this.card = a;
       this.titleService.setTitle(`${this.card.description} - Laukinė Orchidėja`);
     }
   );
  });

    
    this.init();

    if(this.card.videoUrl1.length > 0 ){
      this.video = this.card.videoUrl1;
    }
    
    // this.video = 'GTcl0MipWmA' //video id

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.reframed = false;
      this.player = new window['YT'].Player('player', {
        videoId: this.video,
        events: {
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this),
          'onReady': (e) => {
            if (!this.reframed) {
              this.reframed = true;
              reframe(e.target.a);
            }
          }
        }
      });
    };

    



  this.galleryOptions = [
    {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
];

this.galleryImages = [
];




  
    if(this.card.iconUrl1.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl1, 
        medium: this.card.iconUrl1, 
        big: this.card.iconUrl1
       
      })
    };

    if(this.card.iconUrl2.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl2, 
        medium: this.card.iconUrl2, 
        big: this.card.iconUrl2
      })
    };
    if(this.card.iconUrl3.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl3, 
        medium: this.card.iconUrl3, 
        big: this.card.iconUrl3
      })
    };
    if(this.card.iconUrl4.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl4, 
        medium: this.card.iconUrl4, 
        big: this.card.iconUrl4
      })
    };
    if(this.card.iconUrl5.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl5, 
        medium: this.card.iconUrl5, 
        big: this.card.iconUrl5
      })
    };
    if(this.card.iconUrl6.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl6, 
        medium: this.card.iconUrl6, 
        big: this.card.iconUrl6
      })
    };
    if(this.card.iconUrl7.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl7, 
        medium: this.card.iconUrl7, 
        big: this.card.iconUrl7      })
    };
    if(this.card.iconUrl8.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl8, 
        medium: this.card.iconUrl8, 
        big: this.card.iconUrl8
      })
    };
    if(this.card.iconUrl9.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl9, 
        medium: this.card.iconUrl9, 
        big: this.card.iconUrl9
      })
    };
    if(this.card.iconUrl10.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl10, 
        medium: this.card.iconUrl10, 
        big: this.card.iconUrl10
      })
    };
    if(this.card.iconUrl11.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl11, 
        medium: this.card.iconUrl11, 
        big: this.card.iconUrl11
      })
    };
    if(this.card.iconUrl12.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl12, 
        medium: this.card.iconUrl12, 
        big: this.card.iconUrl12
      })
    };
    if(this.card.iconUrl13.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl13, 
        medium: this.card.iconUrl13, 
        big: this.card.iconUrl13
      })
    };if(this.card.iconUrl14.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl14, 
        medium: this.card.iconUrl14, 
        big: this.card.iconUrl14
      })
    };
    if(this.card.iconUrl15.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl15, 
        medium: this.card.iconUrl15, 
        big: this.card.iconUrl15
      })
    };
    if(this.card.iconUrl16.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl16, 
        medium: this.card.iconUrl16, 
        big: this.card.iconUrl16
      })
    };
    if(this.card.iconUrl17.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl17, 
        medium: this.card.iconUrl17, 
        big: this.card.iconUrl17
      })
    };
    if(this.card.iconUrl18.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl18, 
        medium: this.card.iconUrl18, 
        big: this.card.iconUrl18
      })
    };
    if(this.card.iconUrl19.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl19, 
        medium: this.card.iconUrl19, 
        big: this.card.iconUrl19
      })
    };
    if(this.card.iconUrl20.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl20, 
        medium: this.card.iconUrl20, 
        big: this.card.iconUrl20
      })
    };
    if(this.card.iconUrl21.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl21, 
        medium: this.card.iconUrl21, 
        big: this.card.iconUrl21
      })
    };
    if(this.card.iconUrl22.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl22, 
        medium: this.card.iconUrl22, 
        big: this.card.iconUrl22
      })
    };
    if(this.card.iconUrl23.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl23, 
        medium: this.card.iconUrl23, 
        big: this.card.iconUrl23
      })
    };
    if(this.card.iconUrl24.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl24, 
        medium: this.card.iconUrl24, 
        big: this.card.iconUrl24
      })
    };
    if(this.card.iconUrl25.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl25, 
        medium: this.card.iconUrl25, 
        big: this.card.iconUrl25
      })
    };
    if(this.card.iconUrl26.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl26, 
        medium: this.card.iconUrl26, 
        big: this.card.iconUrl26
      })
    };
    if(this.card.iconUrl27.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl27, 
        medium: this.card.iconUrl27, 
        big: this.card.iconUrl27
      })
    };
    if(this.card.iconUrl28.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl28, 
        medium: this.card.iconUrl28, 
        big: this.card.iconUrl28
      })
    };
    if(this.card.iconUrl29.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl29, 
        medium: this.card.iconUrl29, 
        big: this.card.iconUrl29
      })
    };
    if(this.card.iconUrl30.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl30, 
        medium: this.card.iconUrl30, 
        big: this.card.iconUrl30
      })
    };
    if(this.card.iconUrl31.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl31, 
        medium: this.card.iconUrl31, 
        big: this.card.iconUrl31
      })
    };
    if(this.card.iconUrl32.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl32, 
        medium: this.card.iconUrl32, 
        big: this.card.iconUrl32
      })
    };
    if(this.card.iconUrl33.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl33, 
        medium: this.card.iconUrl33, 
        big: this.card.iconUrl33
      })
    };
    if(this.card.iconUrl34.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl34, 
        medium: this.card.iconUrl34, 
        big: this.card.iconUrl34
      })
    };
    if(this.card.iconUrl35.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl35, 
        medium: this.card.iconUrl35, 
        big: this.card.iconUrl35
      })
    };
    if(this.card.iconUrl36.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl36, 
        medium: this.card.iconUrl36, 
        big: this.card.iconUrl36
      })
    };
    if(this.card.iconUrl37.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl37, 
        medium: this.card.iconUrl37, 
        big: this.card.iconUrl37
      })
    };
    if(this.card.iconUrl38.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl38, 
        medium: this.card.iconUrl38, 
        big: this.card.iconUrl38
      })
    };
    if(this.card.iconUrl39.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl39, 
        medium: this.card.iconUrl39, 
        big: this.card.iconUrl39
      })
    };
    if(this.card.iconUrl40.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl40, 
        medium: this.card.iconUrl40, 
        big: this.card.iconUrl40
      })
    };
    if(this.card.iconUrl41.length > 0){
      this.galleryImages.push({
        small: this.card.iconUrl41, 
        medium: this.card.iconUrl41, 
        big: this.card.iconUrl41
      })
    };
  }



  // imagess: GALLERY_IMAGE[] = [
  //   {
  //     url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260", 
  //     altText: 'woman-in-black-blazer-holding-blue-cup', 
  //     title: 'woman-in-black-blazer-holding-blue-cup',
  //     thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
  //   },
  //   {
  //     url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260", 
  //     altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain', 
  //     title: 'fghfghfghgfh',
  //     thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
  //   },
  // ];







    // this.pageId = '/' + this.card.description;

    // console.log(this.pageId);

  //   this.imagesRect = [
    
  //     new Image(
  //       0,
  //       {
  //         img: this.card.iconUrl1,
  //       },
  //       {
  //         img: this.card.iconUrl1,
  //         alt: this.card.iconUrl1Alt,
  //         ariaLabel: 'First image aria-label'
  //       }
  //     ),
  //     new Image(1, 
  //       { img: this.card.iconUrl2 }, 
  //       { img: this.card.iconUrl2,
  //         alt: this.card.iconUrl2Alt,
  //         ariaLabel: 'First image aria-label' }
  //       ),
  //     new Image(
  //       2,
  //       {
  //         img: this.card.iconUrl3,
  //         alt:  this.card.iconUrl3Alt,
  //         ariaLabel: 'Third image aria-label'
  //       },
  //       {
  //         img: this.card.iconUrl3,
          
  //       }
  //     ),
  //     new Image(3, 
  //       { img: this.card.iconUrl4 }, 
  //       { img: this.card.iconUrl4,
  //         alt: this.card.iconUrl4Alt,
  //         ariaLabel: 'First image aria-label' }
  //       ),
  //       new Image(4, 
  //         { img: this.card.iconUrl5 }, 
  //         { img: this.card.iconUrl5,
  //           alt: this.card.iconUrl5Alt,
  //           ariaLabel: 'First image aria-label' }
  //         ),
  //         new Image(5, 
  //           { img: this.card.iconUrl6 }, 
  //           { img: this.card.iconUrl6,
  //             alt: this.card.iconUrl6Alt,
  //             ariaLabel: 'First image aria-label' }
  //           ),
  //           new Image(6, 
  //             { img: this.card.iconUrl7 }, 
  //             { img: this.card.iconUrl7,
  //               alt: this.card.iconUrl7Alt,
  //               ariaLabel: 'First image aria-label' }
  //             ),
  //             new Image(7, 
  //               { img: this.card.iconUrl8 }, 
  //               { img: this.card.iconUrl8,
  //                 alt: this.card.iconUrl8Alt,
  //                 ariaLabel: 'First image aria-label' }
  //               ),
  //               new Image(8, 
  //                 { img: this.card.iconUrl9 }, 
  //                 { img: this.card.iconUrl9,
  //                   alt: this.card.iconUrl9Alt,
  //                   ariaLabel: 'First image aria-label' }
  //                 ),
  //                 new Image(9, 
  //                   { img: this.card.iconUrl10 }, 
  //                   { img: this.card.iconUrl10,
  //                     alt: this.card.iconUrl10Alt,
  //                     ariaLabel: 'First image aria-label' }
  //                   ),
  //                   new Image(10, 
  //                     { img: this.card.iconUrl11 }, 
  //                     { img: this.card.iconUrl11,
  //                       alt: this.card.iconUrl11Alt,
  //                       ariaLabel: 'First image aria-label' }
  //                     ),
  //                     new Image(11, 
  //                       { img: this.card.iconUrl12 }, 
  //                       { img: this.card.iconUrl12,
  //                         alt: this.card.iconUrl12Alt,
  //                         ariaLabel: 'First image aria-label' }
  //                       ),
  //                       new Image(12, 
  //                         { img: this.card.iconUrl13 }, 
  //                         { img: this.card.iconUrl13,
  //                           alt: this.card.iconUrl13Alt,
  //                           ariaLabel: 'First image aria-label' }
  //                         ),
  //                         new Image(13, 
  //                           { img: this.card.iconUrl14 }, 
  //                           { img: this.card.iconUrl14,
  //                             alt: this.card.iconUrl14Alt,
  //                             ariaLabel: 'First image aria-label' }
  //                           ),
  //                           new Image(14, 
  //                             { img: this.card.iconUrl15 }, 
  //                             { img: this.card.iconUrl15,
  //                               alt: this.card.iconUrl15Alt,
  //                               ariaLabel: 'First image aria-label' }
  //                             ),
  //                             new Image(15, 
  //                               { img: this.card.iconUrl16 }, 
  //                               { img: this.card.iconUrl16,
  //                                 alt: this.card.iconUrl16Alt,
  //                                 ariaLabel: 'First image aria-label' }
  //                               ),
  //                               new Image(16, 
  //                                 { img: this.card.iconUrl17 }, 
  //                                 { img: this.card.iconUrl17,
  //                                   alt: this.card.iconUrl17Alt,
  //                                   ariaLabel: 'First image aria-label' }
  //                                 ),
  //                                 new Image(17, 
  //                                   { img: this.card.iconUrl18 }, 
  //                                   { img: this.card.iconUrl18,
  //                                     alt: this.card.iconUrl18Alt,
  //                                     ariaLabel: 'First image aria-label' }
  //                                   ),
  //                                   new Image(18, 
  //                                     { img: this.card.iconUrl19 }, 
  //                                     { img: this.card.iconUrl19,
  //                                       alt: this.card.iconUrl19Alt,
  //                                       ariaLabel: 'First image aria-label' }
  //                                     ),
  //                                     new Image(19, 
  //                                       { img: this.card.iconUrl20 }, 
  //                                       { img: this.card.iconUrl20,
  //                                         alt: this.card.iconUrl20Alt,
  //                                         ariaLabel: 'First image aria-label' }
  //                                       ),
  //                                       new Image(21, 
  //                                         { img: this.card.iconUrl21 }, 
  //                                         { img: this.card.iconUrl21,
  //                                           alt: this.card.iconUrl21Alt,
  //                                           ariaLabel: 'First image aria-label' }
  //                                         ),
  //                                         new Image(21, 
  //                                           { img: this.card.iconUrl22 }, 
  //                                           { img: this.card.iconUrl22,
  //                                             alt: this.card.iconUrl22Alt,
  //                                             ariaLabel: 'First image aria-label' }
  //                                           ),
  //                                           new Image(22, 
  //                                             { img: this.card.iconUrl23 }, 
  //                                             { img: this.card.iconUrl23,
  //                                               alt: this.card.iconUrl23Alt,
  //                                               ariaLabel: 'First image aria-label' }
  //                                             ),
  //                                             new Image(23, 
  //                                               { img: this.card.iconUrl24 }, 
  //                                               { img: this.card.iconUrl24,
  //                                                 alt: this.card.iconUrl24Alt,
  //                                                 ariaLabel: 'First image aria-label' }
  //                                               ),
  //                                               new Image(24, 
  //                                                 { img: this.card.iconUrl25 }, 
  //                                                 { img: this.card.iconUrl25,
  //                                                   alt: this.card.iconUrl25Alt,
  //                                                   ariaLabel: 'First image aria-label' }
  //                                                 ),
  //                                                 new Image(25, 
  //                                                   { img: this.card.iconUrl26 }, 
  //                                                   { img: this.card.iconUrl26,
  //                                                     alt: this.card.iconUrl26Alt,
  //                                                     ariaLabel: 'First image aria-label' }
  //                                                   ),
  //                                                   new Image(26, 
  //                                                     { img: this.card.iconUrl27 }, 
  //                                                     { img: this.card.iconUrl27,
  //                                                       alt: this.card.iconUrl27Alt,
  //                                                       ariaLabel: 'First image aria-label' }
  //                                                     ),
  //                                                     new Image(27, 
  //                                                       { img: this.card.iconUrl28 }, 
  //                                                       { img: this.card.iconUrl28,
  //                                                         alt: this.card.iconUrl28Alt,
  //                                                         ariaLabel: 'First image aria-label' }
  //                                                       ),
  //                                                       new Image(28, 
  //                                                         { img: this.card.iconUrl29 }, 
  //                                                         { img: this.card.iconUrl29,
  //                                                           alt: this.card.iconUrl29Alt,
  //                                                           ariaLabel: 'First image aria-label' }
  //                                                         ),
  //                                                         new Image(29, 
  //                                                           { img: this.card.iconUrl30 }, 
  //                                                           { img: this.card.iconUrl30,
  //                                                             alt: this.card.iconUrl30Alt,
  //                                                             ariaLabel: 'First image aria-label' }
  //                                                           ),
  //                                                           new Image(30, 
  //                                                             { img: this.card.iconUrl31 }, 
  //                                                             { img: this.card.iconUrl31,
  //                                                               alt: this.card.iconUrl31Alt,
  //                                                               ariaLabel: 'First image aria-label' }
  //                                                             ),
  //                                                             new Image(31, 
  //                                                               { img: this.card.iconUrl32 }, 
  //                                                               { img: this.card.iconUrl32,
  //                                                                 alt: this.card.iconUrl32Alt,
  //                                                                 ariaLabel: 'First image aria-label' }
  //                                                               ),
  //                                                               new Image(32, 
  //                                                                 { img: this.card.iconUrl33 }, 
  //                                                                 { img: this.card.iconUrl33,
  //                                                                   alt: this.card.iconUrl33Alt,
  //                                                                   ariaLabel: 'First image aria-label' }
  //                                                                 ),
  //                                                                 new Image(33, 
  //                                                                   { img: this.card.iconUrl34 }, 
  //                                                                   { img: this.card.iconUrl34,
  //                                                                     alt: this.card.iconUrl34Alt,
  //                                                                     ariaLabel: 'First image aria-label' }
  //                                                                   ),
  //                                                                   new Image(34, 
  //                                                                     { img: this.card.iconUrl35 }, 
  //                                                                     { img: this.card.iconUrl35,
  //                                                                       alt: this.card.iconUrl35Alt,
  //                                                                       ariaLabel: 'First image aria-label' }
  //                                                                     ),
  //                                                                     new Image(35, 
  //                                                                       { img: this.card.iconUrl36 }, 
  //                                                                       { img: this.card.iconUrl36,
  //                                                                         alt: this.card.iconUrl36Alt,
  //                                                                         ariaLabel: 'First image aria-label' }
  //                                                                       ),
  //                                                                       new Image(36, 
  //                                                                         { img: this.card.iconUrl37 }, 
  //                                                                         { img: this.card.iconUrl37,
  //                                                                           alt: this.card.iconUrl37Alt,
  //                                                                           ariaLabel: 'First image aria-label' }
  //                                                                         ),
  //                                                                         new Image(37, 
  //                                                                           { img: this.card.iconUrl38 }, 
  //                                                                           { img: this.card.iconUrl38,
  //                                                                             alt: this.card.iconUrl38Alt,
  //                                                                             ariaLabel: 'First image aria-label' }
  //                                                                           ),
  //                                                                           new Image(38, 
  //                                                                             { img: this.card.iconUrl39 }, 
  //                                                                             { img: this.card.iconUrl39,
  //                                                                               alt: this.card.iconUrl39Alt,
  //                                                                               ariaLabel: 'First image aria-label' }
  //                                                                             ),
  //                                                                             new Image(39, 
  //                                                                               { img: this.card.iconUrl40 }, 
  //                                                                               { img: this.card.iconUrl40,
  //                                                                                 alt: this.card.iconUrl40Alt,
  //                                                                                 ariaLabel: 'First image aria-label' }
  //                                                                               ),
  //                                                                               new Image(40, 
  //                                                                                 { img: this.card.iconUrl41 }, 
  //                                                                                 { img: this.card.iconUrl41,
  //                                                                                   alt: this.card.iconUrl41Alt,
  //                                                                                   ariaLabel: 'First image aria-label' }
  //                                                                                 )
  //   ];
  // }

  // onItemClick(){
  //   console.log("atliktasDarbas onItemClick has been execueted");
  //   this.itemSelected.emit(this.card);
  // }
}
 