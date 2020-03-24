import { Component, OnInit } from '@angular/core';
import { SUNUVIESBUTIS} from 'src/sunu-viesbutis.db';
import { PaslaugosService } from '../paslaugos.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sunus-viesbutis',
  templateUrl: './sunus-viesbutis.component.html',
  styleUrls: ['./sunus-viesbutis.component.scss']
})
export class SunusViesbutisComponent implements OnInit {

  allcontent = SUNUVIESBUTIS;

  title = 'Šunų viešbutis';

  images = [
    {
      0 : 'asdsaasds'
    },
    {
      1 : 'sssssasdsaasds'
    },
    {
      2 : 'asdscccccaasds'
    }
  ]

  linkTo(str: string){
    var _url = str;
    console.log(_url);
    window.open(_url, '_blank');
  }

        title11: boolean;
        description11:boolean;
        list11= true;
        list12= true;
        list13= true;
        list14= true;
        list15= true;
        list16= true;
        list17= true;
        list18= true;
        list19= true;
        list110= true;
        list111= true;
        list112= true;
        title21= true;
        description21= true;
        image= true;
        imageAlt= true;
        list21= true;
        list22= true;
        list23= true;
        list24= true;
        list25= true;
        list26= true;
        list27= true;
        title31= true;
        description31= true;
        image3= true;
        imageAlt3= true;
        list31= true;
        list32= true;
        list33= true;
        list34= true;
        list35= true;
        list36= true;
        list37= true;
        description32= true;
        description33= true;

  constructor(private paslaugos:PaslaugosService, private titleService: Title,
    private metaTagService: Meta) { 
    
  }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Šunų viešbutis tai galimybė laikinai, saugiai palikti savo keturkojį draugą kai išvykstate ir negalite kartu pasiimti savo šuns. ' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'place' },
      { name: 'og:site_name', content: 'index, follow' },
      { name: 'og:title', content: 'Apie trenerį: ' },
      { name: 'og:description', content: 'Šunų viešbutis tai galimybė laikinai, saugiai palikti savo keturkojį draugą kai išvykstate ir negalite kartu pasiimti savo šuns. ' },
      { name: 'og:image', content: '/assets/Rakštis Laukinė Orchidėja.jpg' },
      { name: 'og:url', content: 'http://www.laukineorchideja.lt' },
      { name: 'description', content: 'Šunų viešbutis tai galimybė laikinai, saugiai palikti savo keturkojį draugą kai išvykstate ir negalite kartu pasiimti savo šuns. ' }
    ]);
    this.title11 =true;
    this.description11=true;

    if(this.allcontent.title11 === ''){

      this.title11 = false;
    } 
    if(this.allcontent.description11 === ''){
      this.title11 = false;
    } 
    if(this.allcontent.list11 === ''){
      this.list11 = false;
    }
    if(this.allcontent.list12 === ''){
      this.list12 = false;
    }

    if(this.allcontent.list13 === ''){
      this.list13 == false;
    }
    if(this.allcontent.list14 === ''){
      this.list14 == false;
    }
    if(this.allcontent.list15 === ''){
      this.list15 == false;
    }
    if(this.allcontent.list16 === ''){
      this.list16 == false;
    }
    if(this.allcontent.list17 === ''){
      this.list17 == false;
    }
    if(this.allcontent.list18 === ''){
      this.list18 == false;
    }
    if(this.allcontent.list19 === ''){
      this.list19 == false;
    }
    if(this.allcontent.list110 === ''){
      this.list110 == false;
    }
    if(this.allcontent.list111 === ''){
      this.list111 == false;
    }
    if(this.allcontent.list112 === ''){
      this.list112 == false;

    }

    if(this.allcontent.image === ''){
      this.image == false;
    }
    if(this.allcontent.imageAlt === ''){
      this.imageAlt == false;
    }
    if(this.allcontent.title21 === ''){
      this.title21 == false;
    }
    if(this.allcontent.description21 === ''){
      this.description21 == false;
    }
    if(this.allcontent.list21 === ''){
      this.list21 == false;
    }
    if(this.allcontent.list22 === ''){
      this.list22 == false;
    }
    if(this.allcontent.list23 === ''){
      this.list23 == false;
    }
    if(this.allcontent.list24 === ''){
      this.list24 == false;
    }
    if(this.allcontent.list25 === ''){
      this.list25 == false;
    }
    if(this.allcontent.list26 === ''){
      this.list26 == false;
    }
    if(this.allcontent.list27 === ''){
      this.list27 == false;

    }
    if(this.allcontent.title31 === ''){
      this.title31 == false;
    }
    if(this.allcontent.description31 === ''){
      this.description31 == false;
    }
    if(this.allcontent.imageAlt3 === ''){
      this.imageAlt3 == false;
    }
    if(this.allcontent.image3 === ''){
      this.image3 == false;
    }
    if(this.allcontent.list31 === ''){
      this.list31 == false;
    }
    if(this.allcontent.list32 === ''){
      this.list32 == false;
    }
    if(this.allcontent.list33 === ''){
      this.list33 == false;
    }
    if(this.allcontent.list34 === ''){
      this.list34 == false;
    }
    if(this.allcontent.list35 === ''){
      this.list35 == false;
    }
    if(this.allcontent.list36 === ''){
      this.list36 == false;
    }
    if(this.allcontent.list37 === ''){
      this.list37 == false;
    }
    if(this.allcontent.description32 === ''){
      this.description32 == false;
    }
    if(this.allcontent.description33 === ''){
      this.description33 == false;
    }
    
  }
}
