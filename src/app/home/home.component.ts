import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Card } from '../model/card';
import { GalerijaService } from '../galerija/galerija.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarouselComponent } from 'ngx-carousel-lib';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailserviceService } from '../mailservice.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = false;
  optionsSelect: Array<any>;

  title = 'Laukinė Orchidėja';

  min = 1;
  max = 50;

  content: Card[];

  public innerWidth: any;
  mobile;

  number1:number;
  number2:number;
  sum:number;

  constructor(private service: GalerijaService,
    private router: Router,
    private fb: FormBuilder, private connectionService: MailserviceService,
    private titleService: Title,
    private metaTagService: Meta,
    private route: ActivatedRoute) { 
      this.contactForm = fb.group({
        'contactFormName': ['', Validators.required],
        'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
        'contactFormMessage': ['', Validators.required],
        'simpleText' : ['', Validators.required],
        'exampleContactFormVertification' : ['', Validators.required]
        });
    }

    @ViewChild('topCarousel', {static: false}) topCarousel: CarouselComponent;
  public degree = 25;
  public moreSlides = 3;
  toggle(){
    this.topCarousel.toggleMode();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth < '576'){
    this.mobile = true;
  } else{
    this.mobile = false;
  }
}
  public images = [
    {image: 'assets/Kristina A.jpeg', title: 'Kristina A.', text: 'Rekomenduoju. Daugiametė patirtis, puikiai jaučia šunis ir individualiai parenka dresūros metodus. Pasižymi begaline kantrybe ir puikiu humoro jausmu.'},
    {image: '../assets/Mantas B.jpg', title:'Mantas B.', text: 'Alfonsą Dauskurdį, šuns dresūrai, man rekomendavo bene geriausias Lietuvos dobermanų veislynas Tikrai nauja. Neprašovėm abu su savo augintiniu! Nors treniruotės nelengvos, visada laukiame kitos! Alfonsas turi puikų pajūtį ko nori šuo ir jo šeimininkas. Geras Alfonso dresūros moto - šuo turi būti ne tik paklusnus, bet ir patogus šeimininkams.'},
    {image: '../assets/Sigita.jpg',title:'Sigita', text: 'Daugiau nei prieš du metus su boserone Ūdra atradome šį kinologą ir..... tęsiame pamokas jau su mažyliu boseronu Artes. Pozityvumas, ramus tonas, patirtis, atsižvelgimas į individualias kiekvieno šuns savybes ir galimybes ir yra ta priežastis, kodėl mes čia, nors iki šios mokyklos mums 90 kilometrų...'},
    {image: 'assets/Rasa.jpg',title:'Rasa', text: 'Turiu svajonių šunį, pamokos pas Alfonsą padėjo sudėlioti mums visus reikalingus ir svarbius sprendimus kaip reikia jį padaryti paklusnų ir jaukų visiems: šeimai ir aplinkiniams. Darbas kartu veža mus visus, linkiu visiems tą pajusti... '},
    {image: 'assets/Laurynas K.jpg',title:'Laurynas K.', text: 'Veislynas puikus, džiaugiuosi, kad Figą pasiemėme būtent iš “Laukinė Orchidėja”. Kalytės genai puikūs, šiuo metu lankomės pas kelis kinologus iš Kauno, jie apie Figą atsiliepia taip pat puikiai.'},
    {image: '',title:'Rolandas L.', text: 'Apie veislyną „Laukinė orchidėja“. Tai patikima,atsakingas požiūris į šuniukus. Švara ,tvarka kas man krito į akis iš kart.  Šuniukas su gerais instinktais,puikiai dresuojasi,gražus,sveikas.'},
    {image: 'assets/Ramūnas R.jpeg',title:'Ramūnas R.', text: 'Ačiū šeimininkams už puikų šuniuką. Maloniai nustebau, kad veislyno šeimininkas man pirmam užsisakiusiam,  leido pirmam ir pasirinkti norimą šuniuką. Mūsų Persas auga sveikas ir stiprus. Lengvai perpranta komandas, stengiasi įtikti bei nori visur būti kartu. Puikus šuo, puiki veislė tiems, kurie mėgsta daug judėti.'}
  ];

  linkTo(str: string){
    var _url = str;
    window.open(_url, "_blank");
  }

  prev() {
    this.topCarousel.slidePrev();
  }
  next() {
    this.topCarousel.slideNext();
  }

  ngOnInit() {
 
    
    if(this.route.snapshot.data['name'] == 'anketa'){
      console.log("************************-------------------------***********************************");
      var className = ".anketa";
    const elementList = document.querySelectorAll(className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
    }

    this.route.paramMap.subscribe(params => {
   
      console.log(params);
   
  
    });
    

    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Laukinė Orchidėja – belgų aviganių Malinua veislynas ir šunų dresūros mokykla Šiauliuose. ' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
      { name: 'og:type', content: 'place' },
      { name: 'og:site_name', content: 'index, follow' },
      { name: 'og:title', content: 'Laukinė Orchidėja' },
      { name: 'og:description', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: '/assets/Rakštis Laukinė Orchidėja.jpg' },
      { name: 'og:url', content: 'http://www.laukineorchideja.lt' },
      { name: 'description', content: 'Laukinė Orchidėja – belgų aviganių Malinua veislynas ir šunų dresūros mokykla Šiauliuose. ' }
    ]);

    this.number1 = Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;

    this.number2 = Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;

    this.sum = this.number1 + this.number2;
    this.innerWidth = window.innerWidth;
  if(this.innerWidth < '576'){
    this.mobile = true;
  } else{
    this.mobile = false;
  }
    this.service.getLastEight().subscribe(a =>
      this.content = a);
  }

  onCardSelected(i: any){

  }
  
  
  onCardClick(i: number){
    if(i == 1){
      this.router.navigate(['/paslaugos/belgu-aviganiu-malinua-veislynas']);
    }
    if(i == 2){
      this.router.navigate(['/paslaugos/sunu-dresura']);
    }
    if(i == 3){
      this.router.navigate(['/paslaugos/sunu-viesbutis']);
    }
    if(i == 4){
      this.router.navigate(['/paslaugos/kaniterapija']);
    }
    if(i == 5){
      this.router.navigate(['/paslaugos/edukacines-programos']);
    }
  }


  // uzklausa: Uzklausa;
  // form: FormGroup;

postId;

@HostListener('input') oninput() {
  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  

  onSubmit(){

    var sumContact = this.contactForm.value.exampleContactFormVertification;

    if(this.sum == sumContact){
      this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    alert('Jūsų užklausa buvo sėkmingai išsiųsta');
    this.contactForm.reset();
    this.disabledSubmitButton = true;
  }, error => {
    console.log('Error');
  });
}
}

  value : boolean = false;
}
