import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { ProfileComponent } from './profile/profile.component';
import { AlbumFeedComponent } from './album-feed/album-feed.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: LogoutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: AlbumFeedComponent },
  { path: 'create-album', component: CreateAlbumComponent },
  { path: 'albums', component: MyAlbumsComponent },
  { path: 'album/:id', component: AlbumDetailsComponent },
  { path: 'photo/:id', component: PhotoDetailsComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'upload-photo/:albumId', component: UploadPhotoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
