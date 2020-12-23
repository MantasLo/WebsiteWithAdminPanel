import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import { ProjectsService } from '../projects.service';
import { Project } from '../project.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-post-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  enteredTitle = '';
  enteredDescription = '';
  project: Project;
  isLoading = false;
  form: FormGroup;
  imagePreview: string[] = [];
  primaryLogoPreview: string;
  secondaryLogoPreview: string;
  cardImagePreview: string;
  videoPreview: string;
  dateControl: FormControl;
  private mode = 'create';
  private projectId: string;

  constructor(
    private domSanitizer: DomSanitizer,
    private firestore: AngularFirestore,
    public projectsService: ProjectsService,
    public route: ActivatedRoute,
    public router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)]
      }),
      description: new FormControl(null, { validators: [Validators.required, Validators.minLength(1)] }),
      images: new FormControl([], {
        validators: [Validators.required],
      }),
      logoUrl1: new FormControl(''),
      logoUrl2: new FormControl(''),
      videoUrl1: new FormControl(''),
      longDescription1: new FormControl(''),
      longDescription2: new FormControl(''),
      longDescription3: new FormControl(''),
      longDescription4: new FormControl(''),
      longDescription5: new FormControl(''),
      longDescription6: new FormControl(''),
      cardImg: new FormControl(''),
    });
    this.dateControl = new FormControl('', { validators: [Validators.required] });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('projectId')) {
        this.mode = 'edit';
        this.projectId = paramMap.get('projectId');
        this.isLoading = true;
        this.projectsService.getProject(this.projectId).subscribe(postData => {
          this.isLoading = false;
          this.project = {
            id: this.projectId,
            title: postData.data().title,
            date: new Date(postData.data().month + ' ' + postData.data().day + ', ' + postData.data().year),
            description: postData.data().description,
            imagePaths: postData.data().images,
            urls: [],
          };
          this.form.patchValue({
            title: this.project.title,
            description: this.project.description,
            images: this.project.imagePaths,
            cardImg: postData.data().cardImg,
            logoUrl1: postData.data().logoUrl1,
            logoUrl2: postData.data().logoUrl2,
            videoUrl1: postData.data().videoUrl1,
            longDescription1: postData.data().longDescription1,
            longDescription2: postData.data().longDescription2,
            longDescription3: postData.data().longDescription3,
            longDescription4: postData.data().longDescription4,
            longDescription5: postData.data().longDescription5,
            longDescription6: postData.data().longDescription6,
          });
          this.createStorageRef(postData.data(), 'logoUrl1', 'primaryLogoPreview');
          this.createStorageRef(postData.data(), 'logoUrl2', 'secondaryLogoPreview');
          this.createStorageRef(postData.data(), 'cardImg', 'cardImagePreview');
          this.createStorageRef(postData.data(), 'videoUrl1', 'videoPreview');
          this.dateControl.setValue(this.project.date);
          postData.data().images.forEach(image => {
            const storageRef = this.storage.ref(image);
            storageRef.getDownloadURL().subscribe(url => {
              this.project.urls.push(url);
              this.imagePreview.push(url);
            });
          });
        });
      } else {
        this.mode = 'create';
        this.projectId = null;
      }
    });
  }

  private createStorageRef(data: any, ref: string, field: string) {
    if (data[ref]) {
      const storageRef = this.storage.ref(data[ref]);
      storageRef.getDownloadURL().subscribe(url => {
        this[field] = url;
      });
    }
  }

  onIconPicked(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    const currentValue = this.form.value.images;
    Array.from(files).forEach(file => {
      this.storage.upload(file.name, file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.push(reader.result as string);
      };
      reader.readAsDataURL(file);
      currentValue.push(file);
    });
    this.form.patchValue({ images: currentValue });
  }

  removeIcon(index: number) {
    const currentValue = this.form.value.images;
    currentValue.splice(index, 1);
    this.form.patchValue({ images: currentValue });
    this.imagePreview.splice(index, 1);
  }

  onImageFieldPicked(event: Event, field: string, formControl: string) {
    const file = (event.target as HTMLInputElement).files[0];
    this.storage.upload(file.name, file);
    const reader = new FileReader();
    reader.onload = () => {
      this[field] = this.domSanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    this.form.get(formControl).setValue(file.name);
  }

  removeImageField(field: string, formControl: string) {
    this[field] = '';
    this.form.get(formControl).setValue('');
  }

  onSaveProject() {
    if (this.form.invalid || this.dateControl.invalid) {
      let message = '';
      if (this.dateControl.invalid) {
        message = 'please fill out the date, ';
      }
      if (this.form.get('title').invalid) {
        message += 'please fill out the title field, ';
      }
      if (this.form.get('description').invalid) {
        message += 'please fill out the description field, ';
      }
      if (this.form.get('images').invalid) {
        message += 'please pick the icons, ';
      }
      alert(message.slice(0, -2));
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.projectsService.addProject(this.form, this.dateControl).then(res => {
        // Switch back to post view?
        this.router.navigate(['/admin_prisijungimas']);
      });
    } else {
      this.projectsService.updateProject(this.projectId, this.form, this.dateControl).then(res => {
        // Switch back to post view?
        this.router.navigate(['/admin_prisijungimas']);
      });
      }
    // this.imagePreview = '';
    this.isLoading = false;
  }
}
