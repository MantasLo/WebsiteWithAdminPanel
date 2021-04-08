import { Injectable } from '@angular/core';
import { SUNUDRESURA} from 'src/sunu-dresura.db';
import { SUNUVIESBUTIS} from 'src/sunu-viesbutis.db';


@Injectable({
  providedIn: 'root'
})
export class PaslaugosService {

  allcontent = SUNUVIESBUTIS;
  content = SUNUDRESURA;

  constructor() { }

  getSunuViesbutisData(){
    return this.allcontent;
  }
  getSunuDresuraData(){
    return this.content;
  }
}
