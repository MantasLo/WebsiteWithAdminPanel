import { Component, OnInit } from '@angular/core';
import { SUNUDRESURA} from 'src/sunu-dresura.db';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sunu-dresura',
  templateUrl: './sunu-dresura.component.html',
  styleUrls: ['./sunu-dresura.component.scss']
})
export class SunuDresuraComponent implements OnInit {

  title = 'Šunų dresūra';

  content = SUNUDRESURA;
        title11 =true;
        description11=true;
        listTitle11=true;
        listDescription11=true;
        listTitle12=true;
        listDescription12=true;
        listTitle13=true;
        listDescription13=true;
        listTitle14=true;
        listDescription14=true;
        listTitle15=true;
        listDescription15=true;
        listTitle16=true;
        listDescription16=true;
        title12=true;
        description12=true;
        list11=true;
        list12=true;
        list13=true;
        list14=true;
        list15=true;
        imgLong1=true;
        imageLongAlt1=true;
        title21=true;
        description21=true;
        image2=true;
        imageAlt2=true;
        list21=true;
        list22=true;
        list23=true;
        list24=true;
        list25=true;
        list26=true;
        list27=true;
        list28=true;
        description22=true;
        title31=true;
        description31=true;
        image3=true;
        imageAlt3=true;
        list31=true;
        list32=true;
        list33=true;
        list34=true;
        list35=true;
        list36=true;
        list37=true;
        list38=true;
        description32=true;
        title41=true;
        description41=true;
        image4=true;
        imageAlt4=true;
        listTitle41=true;
        list41=true;
        list42=true;
        listTitle42=true;
        list43=true;
        list44=true;
        listTitle43=true;
        list45=true;
        list46=true;
        listTitle44=true;
        list47=true;
        list48=true;
        description42=true;
        title51=true;
        description51=true;
        image5=true;
        imageAlt5=true;
        list51=true;
        list52=true;
        list53=true;
        list54=true;
        list55=true;
        list56=true;
        list57=true;
        list58=true;
        description52=true;
        title61=true;
        description61=true;
        image6=true;
        imageAlt6=true;
        list61=true;
        list62=true;
        list63=true;
        list64=true;
        list65=true;
        list66=true;
        list67=true;
        list68=true;
        description62=true;
        title71=true;
        description71=true;  
        image7=true;
        imageAlt7=true;
        list71=true;
        list72=true;
        list73=true;
        list74=true;
        list75=true;
        list76=true;
        list77=true;
        list78=true;
        description72=true;

  constructor(private titleService: Title,
    private metaTagService: Meta) { 
    
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Šunų dresūra nuo 6 iki 12mėn. amžiaus (bendras paklusnumo kursas). Šunų dresavimas asmens, turto apsaugai. Šuns dresavimas įvairių daiktų, žmogaus paieškai.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'place' },
      { name: 'og:site_name', content: 'index, follow' },
      { name: 'og:title', content: 'Apie trenerį: ' },
      { name: 'og:description', content: 'Šunų dresūra nuo 6 iki 12mėn. amžiaus (bendras paklusnumo kursas). Šunų dresavimas asmens, turto apsaugai. Šuns dresavimas įvairių daiktų, žmogaus paieškai.' },
      { name: 'og:image', content: '/assets/Rakštis Laukinė Orchidėja.jpg' },
      { name: 'og:url', content: 'http://www.laukineorchideja.lt' },
      { name: 'description', content: 'Šunų dresūra nuo 6 iki 12mėn. amžiaus (bendras paklusnumo kursas). Šunų dresavimas asmens, turto apsaugai. Šuns dresavimas įvairių daiktų, žmogaus paieškai.' }
    ]);

    if(SUNUDRESURA.title11 === ''){
      this.title11 == false;
      console.log(SUNUDRESURA.title11 + "      " + this.title11 )
    }
    console.log(SUNUDRESURA.title11 + "  nice    " + this.title11 )
    if(this.content.description11 === ''){
      this.title11 == false;
    }
    if(this.content.listTitle11 === ''){
      this.listTitle11 == false;
    }
    if(this.content.listDescription11 === ''){
      this.listDescription11 == false;
    }
    if(this.content.listTitle12 === ''){
      this.listTitle12 == false;
    }
    if(this.content.listDescription12 === ''){
      this.listDescription12 == false;
    }
    if(this.content.listDescription13 === ''){
      this.listDescription13 == false;
    }
    if(this.content.listTitle14 === ''){
      this.listTitle14 == false;
    }
    if(this.content.listDescription14 === ''){
      this.listDescription14 == false;
    }
    if(this.content.listTitle15 === ''){
      this.listTitle15 == false;
    }
    if(this.content.listDescription15 === ''){
      this.listDescription15 == false;
    }
    if(this.content.listTitle16 === ''){
      this.listTitle16 == false;
    }
    if(this.content.listDescription16 === ''){
      this.listDescription16 == false;
    }
    if(this.content.title12 === ''){
      this.title12 == false;
    }
    if(this.content.description12 === ''){
      this.description12 == false;
    }
    if(this.content.list11 === ''){
      this.list11 == false;
    }
    if(this.content.list12 === ''){
      this.list12 == false;
    }
    if(this.content.list13 === ''){
      this.list13 == false;
    }
    if(this.content.list14 === ''){
      this.list14 == false;
    }
    if(this.content.list15 === ''){
      this.list15 == false;
    }
    if(this.content.imgLong1 === ''){
      this.imgLong1 == false;
    }
    if(this.content.imageLongAlt1 === ''){
      this.imageLongAlt1 == false;
    }
    if(this.content.title21 === ''){
      this.title21 == false;
    }
    if(this.content.description21 === ''){
      this.description21 == false;
    }
    if(this.content.image2 === ''){
      this.image2 == false;
    }
    if(this.content.imageAlt2 === ''){
      this.imageAlt2 == false;
    }
    if(this.content.list21 === ''){
      this.list21 == false;
    }
    if(this.content.list22 === ''){
      this.list22 == false;
    }
    if(this.content.list23 === ''){
      this.list23 == false;
    }
    if(this.content.list24 === ''){
      this.list24 == false;
    }
    if(this.content.list25 === ''){
      this.list25 == false;
    }
    if(this.content.list26 === ''){
      this.list26 == false;
    }
    if(this.content.list27 === ''){
      this.list27 == false;
    }
    if(this.content.list28 === ''){
      this.list28 == false;
    }
    if(this.content.description22 === ''){
      this.description22 == false;
    }
    if(this.content.title31 === ''){
      this.title31 == false;
    }
    if(this.content.description31 === ''){
      this.description31 == false;
    }
    if(this.content.imageAlt3 === ''){
      this.imageAlt3 == false;
    }
    if(this.content.image3 === ''){
      this.image3 == false;
    }
    if(this.content.list31 === ''){
      this.list31 == false;
    }
    if(this.content.list32 === ''){
      this.list32 == false;
    }
    if(this.content.list33 === ''){
      this.list33 == false;
    }
    if(this.content.list34 === ''){
      this.list34 == false;
    }
    if(this.content.list35 === ''){
      this.list35 == false;
    }
    if(this.content.list36 === ''){
      this.list36 == false;
    }
    if(this.content.list37 === ''){
      this.list37 == false;
    }
    if(this.content.list38 === ''){
      this.list38 == false;
    }
    if(this.content.description32 === ''){
      this.description32 == false;
    }
    if(this.content.title41 === ''){
      this.title41 == false;
    }
    if(this.content.description41 === ''){
      this.description41 == false;
    }
    if(this.content.image4 === ''){
      this.image4 == false;
    }
    if(this.content.imageAlt4 === ''){
      this.imageAlt4 == false;
    }
    if(this.content.listTitle41 === ''){
      this.listTitle41 == false;
    }
    if(this.content.list41 === ''){
      this.list41 == false;
    }
    if(this.content.list42 === ''){
      this.list42 == false;
    }
    if(this.content.listTitle42 === ''){
      this.listTitle42 == false;
    }
    if(this.content.list43 === ''){
      this.list43 == false;
    }
    if(this.content.list44 === ''){
      this.list44 == false;
    }
    if(this.content.listTitle43 === ''){
      this.listTitle43 == false;
    }
    if(this.content.list45 === ''){
      this.list45 == false;
    }
    if(this.content.list46 === ''){
      this.list46 == false;
    }
    if(this.content.listTitle44 === ''){
      this.listTitle44 == false;
    }
    if(this.content.list47 === ''){
      this.list47 == false;
    }
    if(this.content.list48 === ''){
      this.list48 == false;
    }
    if(this.content.description52 === ''){
      this.description52 == false;
    }
    if(this.content.title51 === ''){
      this.title51 == false;
    }
    if(this.content.description51 === ''){
      this.description51 == false;
    }
    if(this.content.image5 === ''){
      this.image5 == false;
    }
    if(this.content.imageAlt5 === ''){
      this.imageAlt5 == false;
    }
    if(this.content.list51 === ''){
      this.list51 == false;
    }
    if(this.content.list52 === ''){
      this.list52 == false;
    }
    if(this.content.list53 === ''){
      this.list53 == false;
    }
    if(this.content.list54 === ''){
      this.list54 == false;
    }
    if(this.content.list55 === ''){
      this.list55 == false;
    }
    if(this.content.list56 === ''){
      this.list56 == false;
    }
    if(this.content.list57 === ''){
      this.list57 == false;
    }
    if(this.content.list58 === ''){
      this.list58 == false;
    }
    if(this.content.description62 === ''){
      this.description62 == false;
    }
    if(this.content.title61 === ''){
      this.title61 == false;
    }
    if(this.content.description61 === ''){
      this.description61 == false;
    }
    if(this.content.image6 === ''){
      this.image6 == false;
    }
    if(this.content.imageAlt6 === ''){
      this.imageAlt6 == false;
    }
    if(this.content.list61 === ''){
      this.list61 == false;
    }
    if(this.content.list62 === ''){
      this.list62 == false;
    }
    if(this.content.list46 === ''){
      this.list63 == false;
    }
    if(this.content.list64 === ''){
      this.list64 == false;
    }
    if(this.content.list65 === ''){
      this.list65 == false;
    }
    if(this.content.list66 === ''){
      this.list66 == false;
    }
    if(this.content.list67 === ''){
      this.list67 == false;
    }
    if(this.content.list68 === ''){
      this.list68 == false;
    }
    if(this.content.description72 === ''){
      this.description72 == false;
    }
    if(this.content.title71 === ''){
      this.title71 == false;
    }
    if(this.content.description71 === ''){
      this.description71 == false;
    }
    if(this.content.image7 === ''){
      this.image7 == false;
    }
    if(this.content.imageAlt7 === ''){
      this.imageAlt7 == false;
    }
    if(this.content.list71 === ''){
      this.list71 == false;
    }
    if(this.content.list72 === ''){
      this.list72 == false;
    }
    if(this.content.list73 === ''){
      this.list73 == false;
    }
    if(this.content.list74 === ''){
      this.list74 == false;
    }
    if(this.content.list75 === ''){
      this.list75 == false;
    }
    if(this.content.list76 === ''){
      this.list76 == false;
    }
    if(this.content.list77 === ''){
      this.list77 == false;
    }
    if(this.content.list78 === ''){
      this.list78 == false;
    }
    if(this.content.description72 === ''){
      this.description72 == false;
    }
  }
}
