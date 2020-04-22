import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';

import { AngularFileUploaderModule } from "angular-file-uploader";

/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';

/* Auth service */
import { AuthenticationService } from './shared/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { AlbumFeedComponent } from './album-feed/album-feed.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAlbumsComponent,
    ProfileComponent,
    AlbumDetailsComponent,
    PhotoDetailsComponent,
    CreateAlbumComponent,
    UploadPhotoComponent,
    AlbumFeedComponent,
    LogoutComponent
  ],
  imports: [
    HttpClientModule, 
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
