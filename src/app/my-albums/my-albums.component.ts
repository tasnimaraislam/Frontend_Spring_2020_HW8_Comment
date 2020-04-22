import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../Album';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.css']
})
export class MyAlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getMyAlbums()
    .subscribe(
      // response => console.log("Response for albums: ", response),
      response => this.albums = <[]> response,
      err => console.error('My Albums got an error: ' + err),
      () => console.log('My Albums got a complete notification')
    );

  }

}
