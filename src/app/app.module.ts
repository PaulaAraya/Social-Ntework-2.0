import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './main/main.component';
import { PicturesComponent } from './pictures/pictures.component';
import { FriendsUserComponent } from './friends-user/friends-user.component';
import { WallComponent } from './wall/wall.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { AuthService } from './auth.service';
import { ABtnLargeComponent } from './a-btn-large/a-btn-large.component';
import { ABtnPlusComponent } from './a-btn-plus/a-btn-plus.component';
import { ABtnSmallComponent } from './a-btn-small/a-btn-small.component';
import { ABtnMediumComponent } from './a-btn-medium/a-btn-medium.component';
import { AImgUserComponent } from './a-img-user/a-img-user.component';
import { ACardComponent } from './a-card/a-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PicturesComponent,
    FriendsUserComponent,
    WallComponent,
    ProfileComponent,
    LoginComponent,
    AdminComponent,
    ABtnLargeComponent,
    ABtnPlusComponent,
    ABtnSmallComponent,
    ABtnMediumComponent,
    AImgUserComponent,
    ACardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
