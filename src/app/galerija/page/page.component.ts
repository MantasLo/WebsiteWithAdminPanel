import {Component, OnInit, Output, EventEmitter, Inject, PLATFORM_ID, Input, ViewChild} from '@angular/core';
import {Image, AccessibilityConfig, ImageEvent} from '@ks89/angular-modal-gallery';
import {isPlatformBrowser, isPlatformServer, DOCUMENT} from '@angular/common';
import {Card} from 'src/app/model/card';
import {ActivatedRoute} from '@angular/router';
import {GalerijaService} from '../galerija.service';
import {Title} from '@angular/platform-browser';

import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';
import reframe from 'reframe.js';
import {take} from 'rxjs/operators';
import {ProjectsService} from '../../admin/projects/projects.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input()
  card: Card;

  id: string;
  title: string;
  category: string;
  description: string;
  isBrowser;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];


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
    private projectsService: ProjectsService,
    private storage: AngularFireStorage,
    private titleService: Title,
  ) {
    if (!this.service.allcontent.length) {
      this.service.initializeProjects();
    }
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onPlayerStateChange(event) {
    console.log(event);
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime());
        }
        ;
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        }
        ;
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
    ;
  };

  // utility
  cleanTime() {
    return Math.round(this.player.getCurrentTime());
  }

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }

  initializeVideo() {
    if (this.card.videoUrl1.length > 0) {
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
  }

  initializeImages() {
    this.card.urls.forEach(url => {
      this.galleryImages.push({
        small: url,
        medium: url,
        big: url
      });
    });
  }

  getProject() {
    this.projectsService.getProject(this.id).subscribe(project => {
      project = {...project.data(), id: project.id};
      project.urls = [];
      project.images.forEach((image, index) => {
        const storageRef = this.storage.ref(image);
        storageRef.getDownloadURL().subscribe(url => {
          project.urls.push(url);
          project['iconUrl' + (index + 1)] = url;
          this.galleryImages.push({
            small: url,
            medium: url,
            big: url
          });        });
      });
      this.card = project;
      this.titleService.setTitle(`${this.card.description} - Laukinė Orchidėja`);
      this.initializeVideo();
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      if (!this.service.allcontent.length) {
        this.getProject();
      } else {
        this.service.getProject(this.id).pipe(take(1)).subscribe(project => {
          this.card = project;
          this.initializeImages();
          this.initializeVideo();
          this.titleService.setTitle(`${this.card.description} - Laukinė Orchidėja`);
        });
      }
    });


    this.init();


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
  }

}
