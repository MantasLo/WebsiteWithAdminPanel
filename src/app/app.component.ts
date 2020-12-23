import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { CanonicalService } from './shared/canonical.service';
import { Meta } from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '50px'
      })),
      state('out', style({
        overflow: 'hidden',
        height: '100px',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor(el: ElementRef,  private vps: ViewportScroller,
              private canonicalService: CanonicalService, private metaTagService: Meta, public router: Router) {
  }
  sticky = false;

  menuPosition: any;

  helpMenuOpen: string;

  title = 'orchideja';

  public innerWidth: any;
  smallscreen;

  classIsActive = false;

  displayHeader = true;

  @ViewChild('ifOppen', {static: false} ) ifOppen: ElementRef;

  @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;

  public menuItemsArray: any[] = [
    {title: 'PAGRINDINIS', link: 'namu-puslapis'},
    {title: 'Mobile Bill', link: '#'},
    {title: 'PASLAUGOS',
      subItems: [
        {title: 'MALINUA ŠUNŲ VEISLYNAS', link: 'paslaugos/sunu-veislynas'},
        {title: 'ŠUNŲ DRESŪRA', link: 'paslaugos/sunu-dresura'},
        {title: 'ŠUNŲ VIEŠBUTIS', link: 'paslaugos/sunu-viesbutis'},
        {title: 'KANITERAPIJA', link: 'paslaugos/kaniterapija'},
        {title: 'EDUKACINĖS PROGRAMOS', link: 'paslaugos/edukacines-programos'}
      ]
    },
    {title: 'RENGINIAI', link: 'renginiai'},
    {title: 'MALINUA', link: 'malinua'},
    {title: 'APIE MANE', link: 'apie-mane'},
    {title: 'KONTAKTAI', link: 'kontakai'}
  ];


  @HostListener('click') toggletoggleClass() {
    if (this.ifOppen) {
      if (this.classIsActive == true) {
        this.ifOppen.nativeElement.classList.remove('show');
        this.classIsActive = false;
      }
      this.classIsActive = this.ifOppen.nativeElement.classList.contains('show');
    }
  }



  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < '992') {
      this.smallscreen = true;
    } else {
      this.smallscreen = false;
    }
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    if (this.ifOppen) {

      const windowScroll = window.pageYOffset;
      if (windowScroll > this.menuPosition) {
        this.sticky = true;
        this.helpMenuOpen = 'in';
      } else {
        this.sticky = false;
        this.helpMenuOpen = 'out';
      }
      if (this.ifOppen.nativeElement != undefined) {
        this.classIsActive = this.ifOppen.nativeElement.classList.contains('show');
        if (this.classIsActive == true) {
          this.ifOppen.nativeElement.classList.remove('show');
          this.classIsActive = false;
        }
      }
    }

  }
  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.helpMenuOpen = 'out';

    this.innerWidth = window.innerWidth;
    if (this.innerWidth < '992') {

      this.smallscreen = true;
    } else {

      this.smallscreen = false;
    }
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Laukinė Orchidėja – belgų aviganių Malinua veislynas ir šunų dresūros mokykla Šiauliuose. ' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'place' },
      { name: 'og:site_name', content: 'index, follow' },
      { name: 'og:title', content: 'Apie Laukinę Orchidėją:' },
      { name: 'og:description', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: '/assets/Rakštis Laukinė Orchidėja.jpg' },
      { name: 'og:url', content: 'http://www.laukineorchideja.lt' },
      { name: 'description', content: 'Laukinė Orchidėja – belgų aviganių Malinua veislynas ir šunų dresūros mokykla Šiauliuose. ' }
    ]);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      this.displayHeader = !event.urlAfterRedirects.includes('admin_prisijungimas');
    });
  }

  public onMenuClose() {
  }
  public onMenuOpen() {
  }
  public onItemSelect(item: any) {
  }

  scrollTo(className: string): void {
    const elementList = document.querySelectorAll(className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  onActivate(event) {
    // let scrollToTop = window.setInterval(() => {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 20); // how far to scroll on each step
      // } else {
      // window.clearInterval(scrollToTop);
      // }
      // }, 5);
    }
  }
}
