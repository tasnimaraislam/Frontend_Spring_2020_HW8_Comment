import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from '../Album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-feed',
  templateUrl: './album-feed.component.html',
  styleUrls: ['./album-feed.component.css']
})
export class AlbumFeedComponent implements OnInit, OnDestroy {

  albums: Album[];

  constructor(private albumService: AlbumService) {  
    this.loadAllAlbums(); 
  }

  ngOnDestroy(): void {
    this.albums = [];
  }

  ngOnInit(): void {
    this.loadAllAlbums();
  }
  
  loadAllAlbums(){
    this.albumService.getAllAlbums()
    .subscribe(
      response => this.setAlbums(<[]> response),
      err => console.error('Albums Feed got an error: ' + err),
      () => console.log('Albums Feed got a complete notification')
    );
  }

  setAlbums(albums: []){
    this.albums = albums.slice(0,10);
  }
}
