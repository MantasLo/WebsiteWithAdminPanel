import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  contact:boolean = false;

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
  }

  onPressed():void {
    this.contactService.contactButtonPressed();
    if(this.router.url === '/namu-puslapis'){
      this.scroll();
    }
  }
  
   scroll(){
    var className = ".anketa";
    const elementList = document.querySelectorAll(className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({block: "end", inline: "nearest"});
    window.scrollBy(200,400);

    this.contactService.afterScroll();

  }

  zoom: number = 10;
  
  // initial center position for the map

  lat: number = 55.9320034;
  lng: number = 23.3555833;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  //longitude and latitude coordinates for points  1 and 2.
  markers: marker[] = [
	  {
		  lat: 55.9251539,
		  lng: 23.3277015,
		  label: 'Vilniaus g. 72',
		  draggable: false
	  },
	  {
		  lat: 55.9151322,
		  lng: 23.4027852,
		  label: 'Kairiai',
		  draggable: false
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
