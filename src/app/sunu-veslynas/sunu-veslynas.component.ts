import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Image, AccessibilityConfig, ImageEvent, PlainGalleryConfig, AdvancedLayout, PlainGalleryStrategy, LineLayout, GridLayout, GalleryService } from '@ks89/angular-modal-gallery';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { SUNUVEISLYNAS} from 'src/sunu-veislynas.db';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';

import { Suo } from 'src/app/model/sunys';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-sunu-veslynas',
  templateUrl: './sunu-veslynas.component.html',
  styleUrls: ['./sunu-veslynas.component.scss']
})
export class SunuVeslynasComponent implements OnInit {

  allcontent = SUNUVEISLYNAS;
  title = 'Malinua šunų veislynas';

  content = SUNUVEISLYNAS[0];

  galleryOptions: NgxGalleryOptions[];
  galleryOptions4: NgxGalleryOptions[];
  galleryOptions6: NgxGalleryOptions[];
  galleryOptions8: NgxGalleryOptions[];
  galleryOptions10: NgxGalleryOptions[];
  galleryOptions12: NgxGalleryOptions[];
  galleryOptions14: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryImages4: NgxGalleryImage[];
  galleryImages6: NgxGalleryImage[];
  galleryImages8: NgxGalleryImage[];
  galleryImages10: NgxGalleryImage[];
  galleryImages12: NgxGalleryImage[];
  galleryImages14: NgxGalleryImage[];

  constructor(@Inject(DOCUMENT) private document: Document,
  @Inject(PLATFORM_ID) private platformId: any,
  private galleryService: GalleryService, private sanitizer: DomSanitizer, private titleService: Title,
  private metaTagService: Meta) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Veisiame belgų aviganių Malinua šunis su FCI kilmės dokumentais. Malinua šuniukai pas naujus šeimininkus keliauja turėdami FCI kilmės dokumentus, pilnai vakcinuoti, dehelmentizuoti (nukirminti), paženklinti augintinio atpažinimo mikroschema bei turėdami Europos Sąjungoje pripažįstamą gyvūno augintinio pasą. ' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'place' },
      { name: 'og:site_name', content: 'index, follow' },
      { name: 'og:title', content: 'Apie trenerį: ' },
      { name: 'og:description', content: 'Veisiame belgų aviganių Malinua šunis su FCI kilmės dokumentais. Malinua šuniukai pas naujus šeimininkus keliauja turėdami FCI kilmės dokumentus, pilnai vakcinuoti, dehelmentizuoti (nukirminti), paženklinti augintinio atpažinimo mikroschema bei turėdami Europos Sąjungoje pripažįstamą gyvūno augintinio pasą. ' },
      { name: 'og:image', content: '/assets/Rakštis Laukinė Orchidėja.jpg' },
      { name: 'og:url', content: 'http://www.laukineorchideja.lt' },
      { name: 'description', content: 'Veisiame belgų aviganių Malinua šunis su FCI kilmės dokumentais. Malinua šuniukai pas naujus šeimininkus keliauja turėdami FCI kilmės dokumentus, pilnai vakcinuoti, dehelmentizuoti (nukirminti), paženklinti augintinio atpažinimo mikroschema bei turėdami Europos Sąjungoje pripažįstamą gyvūno augintinio pasą. ' }
    ]);

  this.galleryOptions = [
    { "previewFullscreen": true, "previewKeyboardNavigation": true },
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

this.galleryOptions4 = [
  { "previewFullscreen": true, "previewKeyboardNavigation": true },
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

this.galleryOptions6 = [
  { "previewFullscreen": true, "previewKeyboardNavigation": true },
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

this.galleryOptions8 = [
  { "previewFullscreen": true, "previewKeyboardNavigation": true },
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

this.galleryOptions10 = [
  { "previewFullscreen": true, "previewKeyboardNavigation": true },
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

this.galleryOptions12 = [
  { "previewFullscreen": true, "previewKeyboardNavigation": true },
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

this.galleryOptions14 = [
  { "previewFullscreen": true, "previewKeyboardNavigation": true },
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

    if(this.content.iconUrl1.length > 0){
      this.galleryImages.push({
        small: this.content.iconUrl1, 
        medium: this.content.iconUrl1, 
        big: this.content.iconUrl1,
        description: this.content.iconUrl1Alt
       
      })
    };
    if(this.content.iconUrl2.length > 0){
      this.galleryImages.push({
        small: this.content.iconUrl2, 
        medium: this.content.iconUrl2, 
        big: this.content.iconUrl2,
        description: this.content.iconUrl2Alt
      })
    };
    if(this.content.iconUrl3.length > 0){
      this.galleryImages.push({
        small: this.content.iconUrl3, 
        medium: this.content.iconUrl3, 
        big: this.content.iconUrl3,
        description: this.content.iconUrl3Alt
      })
    };
    if(this.content.iconUrl4.length > 0){
      this.galleryImages.push({
        small: this.content.iconUrl4, 
        medium: this.content.iconUrl4, 
        big: this.content.iconUrl4,
        description: this.content.iconUrl4Alt
      })
    };
    if(this.content.iconUrl5.length > 0){
      this.galleryImages.push({
        small: this.content.iconUrl5, 
        medium: this.content.iconUrl5, 
        big: this.content.iconUrl5,
        description: this.content.iconUrl5Alt
      })
    };
    if(this.content.iconUrl6.length > 0){
      this.galleryImages.push({
        small: this.content.iconUrl6, 
        medium: this.content.iconUrl6, 
        big: this.content.iconUrl6,
        description: this.content.iconUrl6Alt
      })
    };



this.galleryImages4 = [
];

    if(this.content.iconUrl41.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl41, 
        medium: this.content.iconUrl41, 
        big: this.content.iconUrl41
       
      })
      console.log(this.content.iconUrl41)
    };
    if(this.content.iconUrl42.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl42, 
        medium: this.content.iconUrl42, 
        big: this.content.iconUrl42
      })
      console.log(this.content.iconUrl42)
    };
    if(this.content.iconUrl43.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl43, 
        medium: this.content.iconUrl43, 
        big: this.content.iconUrl43
      })
      console.log(this.content.iconUrl43)
    };
    if(this.content.iconUrl44.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl44, 
        medium: this.content.iconUrl44, 
        big: this.content.iconUrl44
      })
    };
    if(this.content.iconUrl45.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl45, 
        medium: this.content.iconUrl45, 
        big: this.content.iconUrl45
      })
    };
    if(this.content.iconUrl46.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl46, 
        medium: this.content.iconUrl46, 
        big: this.content.iconUrl46
      })
    };
    if(this.content.iconUrl47.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl47, 
        medium: this.content.iconUrl47, 
        big: this.content.iconUrl47
      })
    };
    if(this.content.iconUrl48.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl48, 
        medium: this.content.iconUrl48, 
        big: this.content.iconUrl48
      })
    };
    if(this.content.iconUrl49.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl49, 
        medium: this.content.iconUrl49, 
        big: this.content.iconUrl49
      })
    };
    if(this.content.iconUrl410.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl410, 
        medium: this.content.iconUrl410, 
        big: this.content.iconUrl410
      })
    };
    if(this.content.iconUrl411.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl411, 
        medium: this.content.iconUrl411, 
        big: this.content.iconUrl411
      })
    };
    if(this.content.iconUrl412.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl412, 
        medium: this.content.iconUrl412, 
        big: this.content.iconUrl412
      })
    };
    if(this.content.iconUrl413.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl413, 
        medium: this.content.iconUrl413, 
        big: this.content.iconUrl413
      })
    };
    if(this.content.iconUrl414.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl414, 
        medium: this.content.iconUrl414, 
        big: this.content.iconUrl414
      })
    };
    if(this.content.iconUrl415.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl415, 
        medium: this.content.iconUrl415, 
        big: this.content.iconUrl415
      })
    };
    if(this.content.iconUrl416.length > 0){
      this.galleryImages4.push({
        small: this.content.iconUrl416, 
        medium: this.content.iconUrl416, 
        big: this.content.iconUrl416
      })
    };

    this.galleryImages6 = [
    ];
    
        if(this.content.iconUrl61.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl61, 
            medium: this.content.iconUrl61, 
            big: this.content.iconUrl61
           
          })
        };
        if(this.content.iconUrl62.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl62, 
            medium: this.content.iconUrl62, 
            big: this.content.iconUrl62
          })
        };
        if(this.content.iconUrl63.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl63, 
            medium: this.content.iconUrl63, 
            big: this.content.iconUrl63
          })
        };
        if(this.content.iconUrl64.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl64, 
            medium: this.content.iconUrl64, 
            big: this.content.iconUrl64
          })
        };
        if(this.content.iconUrl65.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl65, 
            medium: this.content.iconUrl65, 
            big: this.content.iconUrl65
          })
        };
        if(this.content.iconUrl66.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl66, 
            medium: this.content.iconUrl66, 
            big: this.content.iconUrl66
          })
        };
        if(this.content.iconUrl67.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl67, 
            medium: this.content.iconUrl67, 
            big: this.content.iconUrl67
          })
        };
        if(this.content.iconUrl68.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl68, 
            medium: this.content.iconUrl68, 
            big: this.content.iconUrl68
          })
        };
        if(this.content.iconUrl69.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl69, 
            medium: this.content.iconUrl69, 
            big: this.content.iconUrl69
          })
        };
        if(this.content.iconUrl610.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl610, 
            medium: this.content.iconUrl610, 
            big: this.content.iconUrl610
          })
        };
        if(this.content.iconUrl611.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl611, 
            medium: this.content.iconUrl611, 
            big: this.content.iconUrl611
          })
        };
        if(this.content.iconUrl612.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl612, 
            medium: this.content.iconUrl612, 
            big: this.content.iconUrl612
          })
        };
        if(this.content.iconUrl613.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl613, 
            medium: this.content.iconUrl613, 
            big: this.content.iconUrl613
          })
        };
        if(this.content.iconUrl614.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl614, 
            medium: this.content.iconUrl614, 
            big: this.content.iconUrl614
          })
        };
        if(this.content.iconUrl615.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl615, 
            medium: this.content.iconUrl615, 
            big: this.content.iconUrl615
          })
        };
        if(this.content.iconUrl616.length > 0){
          this.galleryImages6.push({
            small: this.content.iconUrl616, 
            medium: this.content.iconUrl616, 
            big: this.content.iconUrl616
          })
        };

        this.galleryImages8 = [
        ];
        
            if(this.content.iconUrl81.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl81, 
                medium: this.content.iconUrl81, 
                big: this.content.iconUrl81
               
              })
            };
            if(this.content.iconUrl82.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl82, 
                medium: this.content.iconUrl82, 
                big: this.content.iconUrl82
              })
            };
            if(this.content.iconUrl83.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl83, 
                medium: this.content.iconUrl83, 
                big: this.content.iconUrl83
              })
            };
            if(this.content.iconUrl84.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl84, 
                medium: this.content.iconUrl84, 
                big: this.content.iconUrl84
              })
            };
            if(this.content.iconUrl85.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl85, 
                medium: this.content.iconUrl85, 
                big: this.content.iconUrl85
              })
            };
            if(this.content.iconUrl86.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl86, 
                medium: this.content.iconUrl86, 
                big: this.content.iconUrl86
              })
            };
            if(this.content.iconUrl87.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl87, 
                medium: this.content.iconUrl87, 
                big: this.content.iconUrl87
              })
            };
            if(this.content.iconUrl88.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl88, 
                medium: this.content.iconUrl88, 
                big: this.content.iconUrl88
              })
            };
            if(this.content.iconUrl89.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl89, 
                medium: this.content.iconUrl89, 
                big: this.content.iconUrl89
              })
            };
            if(this.content.iconUrl810.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl810, 
                medium: this.content.iconUrl810, 
                big: this.content.iconUrl810
              })
            };
            if(this.content.iconUrl811.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl811, 
                medium: this.content.iconUrl811, 
                big: this.content.iconUrl811
              })
            };
            if(this.content.iconUrl812.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl812, 
                medium: this.content.iconUrl812, 
                big: this.content.iconUrl812
              })
            };
            if(this.content.iconUrl813.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl813, 
                medium: this.content.iconUrl813, 
                big: this.content.iconUrl813
              })
            };
            if(this.content.iconUrl814.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl814, 
                medium: this.content.iconUrl814, 
                big: this.content.iconUrl814
              })
            };
            if(this.content.iconUrl815.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl815, 
                medium: this.content.iconUrl815, 
                big: this.content.iconUrl815
              })
            };
            if(this.content.iconUrl816.length > 0){
              this.galleryImages8.push({
                small: this.content.iconUrl816, 
                medium: this.content.iconUrl816, 
                big: this.content.iconUrl816
              })
            };

            this.galleryImages10 = [
            ];
            
                if(this.content.iconUrl101.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl101, 
                    medium: this.content.iconUrl101, 
                    big: this.content.iconUrl101
                   
                  })
                };
                if(this.content.iconUrl102.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl102, 
                    medium: this.content.iconUrl102, 
                    big: this.content.iconUrl102
                  })
                };
                if(this.content.iconUrl103.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl103, 
                    medium: this.content.iconUrl103, 
                    big: this.content.iconUrl103
                  })
                };
                if(this.content.iconUrl104.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl104, 
                    medium: this.content.iconUrl104, 
                    big: this.content.iconUrl104
                  })
                };
                if(this.content.iconUrl105.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl105, 
                    medium: this.content.iconUrl105, 
                    big: this.content.iconUrl105
                  })
                };
                if(this.content.iconUrl106.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl106, 
                    medium: this.content.iconUrl106, 
                    big: this.content.iconUrl106
                  })
                };
                if(this.content.iconUrl107.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl107, 
                    medium: this.content.iconUrl107, 
                    big: this.content.iconUrl107
                  })
                };
                if(this.content.iconUrl108.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl108, 
                    medium: this.content.iconUrl108, 
                    big: this.content.iconUrl108
                  })
                };
                if(this.content.iconUrl109.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl109, 
                    medium: this.content.iconUrl109, 
                    big: this.content.iconUrl109
                  })
                };
                if(this.content.iconUrl1010.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl1010, 
                    medium: this.content.iconUrl1010, 
                    big: this.content.iconUrl1010
                  })
                };
                if(this.content.iconUrl1011.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl1011, 
                    medium: this.content.iconUrl1011, 
                    big: this.content.iconUrl1011
                  })
                };
                if(this.content.iconUrl1012.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl1012, 
                    medium: this.content.iconUrl1012, 
                    big: this.content.iconUrl1012
                  })
                };
                if(this.content.iconUrl1013.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl1013, 
                    medium: this.content.iconUrl1013, 
                    big: this.content.iconUrl1013
                  })
                };
                if(this.content.iconUrl1014.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl1014, 
                    medium: this.content.iconUrl1014, 
                    big: this.content.iconUrl1014
                  })
                };
                if(this.content.iconUrl1015.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl1015, 
                    medium: this.content.iconUrl1015, 
                    big: this.content.iconUrl1015
                  })
                };
                if(this.content.iconUrl1016.length > 0){
                  this.galleryImages10.push({
                    small: this.content.iconUrl1016, 
                    medium: this.content.iconUrl1016, 
                    big: this.content.iconUrl1016
                  })
                };

                this.galleryImages12 = [
                ];
                
                    if(this.content.iconUrl121.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl121, 
                        medium: this.content.iconUrl121, 
                        big: this.content.iconUrl121
                       
                      })
                    };
                    if(this.content.iconUrl122.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl122, 
                        medium: this.content.iconUrl122, 
                        big: this.content.iconUrl122
                      })
                    };
                    if(this.content.iconUrl123.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl123, 
                        medium: this.content.iconUrl123, 
                        big: this.content.iconUrl123
                      })
                    };
                    if(this.content.iconUrl124.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl124, 
                        medium: this.content.iconUrl124, 
                        big: this.content.iconUrl124
                      })
                    };
                    if(this.content.iconUrl125.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl125, 
                        medium: this.content.iconUrl125, 
                        big: this.content.iconUrl125
                      })
                    };
                    if(this.content.iconUrl126.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl126, 
                        medium: this.content.iconUrl126, 
                        big: this.content.iconUrl126
                      })
                    };
                    if(this.content.iconUrl127.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl127, 
                        medium: this.content.iconUrl127, 
                        big: this.content.iconUrl127
                      })
                    };
                    if(this.content.iconUrl128.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl128, 
                        medium: this.content.iconUrl128, 
                        big: this.content.iconUrl128
                      })
                    };
                    if(this.content.iconUrl129.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl129, 
                        medium: this.content.iconUrl129, 
                        big: this.content.iconUrl129
                      })
                    };
                    if(this.content.iconUrl1210.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl1210, 
                        medium: this.content.iconUrl1210, 
                        big: this.content.iconUrl1210
                      })
                    };
                    if(this.content.iconUrl1211.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl1211, 
                        medium: this.content.iconUrl1211, 
                        big: this.content.iconUrl1211
                      })
                    };
                    if(this.content.iconUrl1212.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl1212, 
                        medium: this.content.iconUrl1212, 
                        big: this.content.iconUrl1212
                      })
                    };
                    if(this.content.iconUrl1213.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl1213, 
                        medium: this.content.iconUrl1213, 
                        big: this.content.iconUrl1213
                      })
                    };
                    if(this.content.iconUrl1214.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl1214, 
                        medium: this.content.iconUrl1214, 
                        big: this.content.iconUrl1214
                      })
                    };
                    if(this.content.iconUrl1215.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl1215, 
                        medium: this.content.iconUrl1215, 
                        big: this.content.iconUrl1215
                      })
                    };
                    if(this.content.iconUrl1216.length > 0){
                      this.galleryImages12.push({
                        small: this.content.iconUrl1216, 
                        medium: this.content.iconUrl1216, 
                        big: this.content.iconUrl1216
                      })
                    };
  }
}

