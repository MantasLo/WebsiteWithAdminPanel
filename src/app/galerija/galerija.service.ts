import {Injectable} from '@angular/core';
import {Card} from '../model/card';
import {Observable, of, Subject} from 'rxjs';
import {ProjectsService} from '../admin/projects/projects.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalerijaService {

  allcontent = [];
  contentSubject = new Subject();

  //allcontent: Card[] = new Array[1];
  private content: Card;

  constructor(protected projectsService: ProjectsService, private storage: AngularFireStorage) {
  }

  initializeProjects() {
    this.projectsService.getProjects().pipe(take(1)).subscribe(projects => {
      this.allcontent = projects.map((project: any) => {
        return {...project.payload.doc.data(), id: project.payload.doc.id};
      });
      this.allcontent.forEach(project => {
        project.urls = [];
        project.images.forEach((image, index) => {
          const storageRef = this.storage.ref(image);
          storageRef.getDownloadURL().subscribe(url => {
            project.urls.push(url);
            project['iconUrl' + (index + 1)] = url;
            this.contentSubject.next(this.allcontent);
          });
        });
      });
    });
  }

  getCards(id: number) {
    return this.allcontent[id];
  }

  getSimilarCards(category: string) {
    if (this.allcontent[category] === category) {

    }
    //return this.allcontent.get
    return this.allcontent;
  }

  getProject(id: string): Observable<Card> {
    const items: Card[] = this.allcontent.filter(a => a.id == id);
    return of(items[0]);
  }

  getLastEight(): Observable<Card[]> {
    this.allcontent.sort((a: Card, b: Card) => {
      return b.year - a.year || b.month - a.month || b.day - a.day;
    });
    let newArray = this.allcontent.slice(0, 9);
    //need to sort by year and then add first six elements to array
    return of(newArray);
  }

  getLastProject(): Observable<Card> {
    const items: Card[] = this.allcontent.filter(a => a.id == 1);
    return of(items[0]);
  }

  getProjects(): Observable<Card[]> {
    const items: Card[] = this.allcontent;
    return of(items);
  }

  getProjectById(id: number): Observable<Card> {
    const items: Card[] = this.allcontent.filter(a => a.id == id);
    return of(items[0]);
  }

// getSimilarProjects(category: string, id:number): Observable<Card[]>{
//   var categorizedProjects:any = [];
//   this.content = this.allcontent[id-1];

//   this.allcontent.filter(project =>
//       {
//           var str = project.category1 + '';
//           var array = str.split(',');
//           array.forEach(element => {
//               if(element === category && project.id !== this.content.id){

//                      categorizedProjects.push(project);
//               }
//           });
//       });
//   return of(categorizedProjects);
// }
}

