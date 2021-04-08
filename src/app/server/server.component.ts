import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MailserviceService } from '../mailservice.service';
import { GalerijaService } from '../galerija/galerija.service';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = false;

  min = 1;
  max = 50;

  number1:number;
  number2:number;
  sum:number;

  constructor(private service: GalerijaService,
    private fb: FormBuilder, private connectionService: MailserviceService, private route: ActivatedRoute, private contactService: ContactService) { 

      this.contactForm = fb.group({
        'contactFormName': ['', Validators.required],
        'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
        'contactFormMessage': ['', Validators.required],
        'simpleText' : ['', Validators.required],
        'exampleContactFormVertification' : ['', Validators.required]
        });
    }

  ngOnInit() {
    if(this.contactService.getContact() === true){
      this.scroll();
    }
    
    
//     if(this.route.snapshot.data['name'] == 'anketa'){
//       console.log("************************-------------------------***********************************");
//       var className = ".anketa";
//     const elementList = document.querySelectorAll(className);
//     const element = elementList[0] as HTMLElement;
//     element.scrollIntoView({ behavior: 'smooth' });
//     }


    this.number1 = Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;

    this.number2 = Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;

    this.sum = this.number1 + this.number2;

  }
  
   scroll(){
    var className = ".anketa";
    const elementList = document.querySelectorAll(className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({block: "end", inline: "nearest"});
    this.contactService.afterScroll();

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
}
