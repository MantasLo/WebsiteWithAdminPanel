import { Component, OnInit } from '@angular/core';
import { APIEMANE } from 'src/apie-mane.db';
import {Meta, Title} from '@angular/platform-browser';
import {AngularFirestore} from '@angular/fire/firestore';
import {CanonicalService} from '../shared/canonical.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  allcontent = APIEMANE;

  title = 'Admin:';


  constructor(private titleService: Title) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
  }

}
