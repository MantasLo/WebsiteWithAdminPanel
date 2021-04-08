import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: any[] = [];
  isLoading = false;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];

  constructor(public projectsService: ProjectsService, private storage: AngularFireStorage) {}

  ngOnInit() {
    this.isLoading = true;

    this.getProjects();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(projects => {
      this.isLoading = false;
      this.projects = projects.map((project: any) => {
        return {...project.payload.doc.data(), id: project.payload.doc.id};
      });
      this.projects.forEach(project => {
        project.urls = [];
        project.images.forEach(image => {
          const storageRef = this.storage.ref(image);
          storageRef.getDownloadURL().subscribe(url => {
            project.urls.push(url);
          });
        });
      });
    });
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.projectsService.deleteProject(postId).then(() => {
      this.getProjects();
    });
  }

  ngOnDestroy() {
  }
}
