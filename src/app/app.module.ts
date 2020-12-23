import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SunuDresuraComponent } from './sunu-dresura/sunu-dresura.component';
import { SunusViesbutisComponent } from './sunus-viesbutis/sunus-viesbutis.component';
import { PaslaugosService } from './paslaugos.service';
import { EdukacinesProgramosComponent } from './edukacines-programos/edukacines-programos.component';
import { MalinuaComponent } from './malinua/malinua.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { SunuVeslynasComponent } from './sunu-veslynas/sunu-veslynas.component';
import { KaniterapijaComponent } from './kaniterapija/kaniterapija.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { CardComponent } from './galerija/card/card.component';
import { PageComponent } from './galerija/page/page.component';
import { LastGaleryComponent } from './last-galery/last-galery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-carousel-lib';

import { AgmCoreModule } from '@agm/core';

import { NgxGalleryModule } from 'ngx-gallery';
import { DropdownDirective } from './dropdown.directive';


import { IgxNavigationDrawerModule } from 'igniteui-angular';
import { DropdownInsideDirective } from './dropdown-inside.directive';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParamaComponent } from './parama/parama.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServerComponent } from './server/server.component';
import { ContactService } from './contact.service';
import {AdminComponent} from './admin/admin.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AdminHeaderComponent} from './admin/header/admin-header.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import {ProjectListComponent} from './admin/projects/project-list/project-list.component';
import {ProjectCreateComponent} from './admin/projects/project-create/project-create.component';
import {LoginComponent} from './admin/auth/login/login.component';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
// import { MatVideoModule } from 'mat-video';
import 'firebase/auth';
import 'firebase/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SunuDresuraComponent,
    SunusViesbutisComponent,
    EdukacinesProgramosComponent,
    MalinuaComponent,
    AboutMeComponent,
    SunuVeslynasComponent,
    KaniterapijaComponent,
    GalerijaComponent,
    CardComponent,
    PageComponent,
    LastGaleryComponent,
    FooterComponent,
    DropdownDirective,
    DropdownInsideDirective,
    ParamaComponent,
    PagenotfoundComponent,
    ServerComponent,

    //  Admin
    AdminComponent,
    AdminHeaderComponent,
    LoginComponent,
    ProjectCreateComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'orchideja'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatVideoModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCh1FH8sRTSn7nzcBa4vNII00bJSwg1hyg'
    }),
    NgxGalleryModule,
    // MatSidenavModule,
    IgxNavigationDrawerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    //  Admin
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,

  ],
  providers: [AngularFireAuth, PaslaugosService, ContactService, AngularFireStorage, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
