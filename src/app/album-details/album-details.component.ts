import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../Photo';
import { UserService } from '../user.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumId: string;
  photos: Photo[];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('id');
      this.loadPhotosForAlbum(this.albumId);
    });
  }

  loadPhotosForAlbum(albumId:string){
    this.albumService.getPhotosForAlbum(albumId)
    .subscribe(
      // response => console.log("Response for albums: ", response),
      response => this.photos = <[]> response,
      err => console.error('Load Albums-Photos got an error: ' + err),
      () => console.log('Load Albums-Photos got a complete notification')
    );
  }

  public makeProfilePhoto(photoUrl: string){
    console.log("Got profile photo to change", photoUrl);
    this.userService.makeProfilePhoto(photoUrl)
    .subscribe(
      response => console.log("Profile photo updated", response),
      err => console.error('Profile photo update got an error: ' + err),
      () => console.log('Profile photo update got a complete notification')
    );
  }

  public makeAlbumCover(photoUrl: string){
    this.albumService.makeAlbumCover(photoUrl, this.albumId)
    .subscribe(
      response => console.log("Album cover updated", response),
      err => console.error('Album cover update got an error: ' + err),
      () => console.log('Album cover update got a complete notification')
    );
  }

}
