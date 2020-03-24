import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SunuDresuraComponent } from './sunu-dresura/sunu-dresura.component';
import { SunusViesbutisComponent } from './sunus-viesbutis/sunus-viesbutis.component';
import { MalinuaComponent } from './malinua/malinua.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SunuVeslynasComponent } from './sunu-veslynas/sunu-veslynas.component';
import { EdukacinesProgramosComponent } from './edukacines-programos/edukacines-programos.component';
import { KaniterapijaComponent } from './kaniterapija/kaniterapija.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { PageComponent } from './galerija/page/page.component';
import { ParamaComponent } from './parama/parama.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'namu-puslapis', component: HomeComponent },

  { path: 'apie-mane', component: AboutMeComponent },
  { path: 'paslaugos/sunu-dresura', component: SunuDresuraComponent},
  { path: 'paslaugos/sunu-viesbutis', component: SunusViesbutisComponent},
  { path: 'paslaugos/belgu-aviganiu-malinua-veislynas', component: SunuVeslynasComponent},
  { path: 'paslaugos/edukacines-programos', component: EdukacinesProgramosComponent},
  { path: 'paslaugos/kaniterapija', component: KaniterapijaComponent},
  { path: 'malinua', component: MalinuaComponent},
  { path: 'renginiai', component: GalerijaComponent},
  { path: 'renginiai/:description', component :  PageComponent},
  { path: 'parama', component :  ParamaComponent},
  { path: 'puslapis-nerastas', component: PagenotfoundComponent},
  { path: '' ,
    redirectTo: '/namu-puslapis',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/puslapis-nerastas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
