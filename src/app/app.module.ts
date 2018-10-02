import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { Profile } from '../../node_modules/@types/selenium-webdriver/firefox';
import { CoursesListComponent } from './courses-list/courses-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ProfileComponent,
    ModalComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
