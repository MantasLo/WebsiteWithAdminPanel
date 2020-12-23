import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import {ProjectsService} from '../admin/projects/projects.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {GalerijaService} from './galerija.service';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.scss']
})
export class GalerijaComponent implements OnInit {
  allcontent = [];

  constructor(protected projectsService: ProjectsService, private storage: AngularFireStorage,
              protected galerijaService: GalerijaService) { }

  ngOnInit() {
    if (!this.galerijaService.allcontent.length) {
      this.galerijaService.initializeProjects();
      this.galerijaService.contentSubject.pipe(take(1)).subscribe((content: any[]) => {
        this.allcontent = content;
        console.log(content);
      });
    } else {
      this.allcontent = this.galerijaService.allcontent;
    }
  }

  p:any;

  // items = [];

  onCardSelected(card: Card){


    //window.location.href = _url;

    //make hyperlink here
  }
}
