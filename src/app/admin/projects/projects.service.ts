import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Project } from './project.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  constructor(private http: HttpClient, private router: Router, private firestore: AngularFirestore, private storage: AngularFireStorage) {}

  getProjects() {
    return this.firestore.collection('projects').snapshotChanges();
  }

  getProject(id: string): any {
    return this.firestore.collection('projects').doc(id).get();
  }

  addProject(form: FormGroup, dateControl: FormControl) {
    const project = this.preprocessProject(form, dateControl);
    return this.firestore.collection('projects').add(
      project
    );
  }

  updateProject(id: string, form: FormGroup, dateControl: FormControl) {
    const project = this.preprocessProject(form, dateControl);
    return this.firestore
      .collection('projects')
      .doc(id)
      .set(
        project,
        {merge: true}
      );
  }

  deleteProject(projectId: string) {
    return this.firestore.collection('projects').doc(projectId).delete();
  }

  preprocessProject(form: FormGroup, dateControl: FormControl) {
    const project = {
        title: form.value.title,
        year: dateControl.value.getFullYear(),
        month: dateControl.value.getMonth() + 1,
        day: dateControl.value.getDate(),
        description: form.value.description,
        logoUrl1: form.value.logoUrl1,
        logoUrl2: form.value.logoUrl2,
        videoUrl1: form.value.videoUrl1,
        cardImg: form.value.cardImg,
        longDescription1: form.value.longDescription1,
        longDescription2: form.value.longDescription2,
        longDescription3: form.value.longDescription3,
        longDescription4: form.value.longDescription4,
        longDescription5: form.value.longDescription5,
        longDescription6: form.value.longDescription6,
        images: [],
    };

    form.value.images.forEach((image, index) => {
      const name = image.name ? image.name : image;
      project['iconUrl' + (index + 1)] = name;
      project['iconUrl' + (index + 1) + 'Alt'] = '';
      project.images.push(name);
    });

    return project;

  }
}
