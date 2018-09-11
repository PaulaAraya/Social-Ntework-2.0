import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FriendsUserComponent } from './friends-user/friends-user.component';
import { WallComponent } from './wall/wall.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PicturesComponent,
    FriendsUserComponent,
    WallComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  
    @NgModule({
      declarations: [
        AppComponent
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
      providers: [AuthService],
      bootstrap: [AppComponent]
    ],
    })
    export class AppModule { }
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
