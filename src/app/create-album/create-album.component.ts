import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  albumTitle: string;
  defaultTitle: string = "My Album";

  afuConfig = {
    uploadAPI: {
      url: environment.API_BASE_URL + "/files/upload"
    }
  };

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumTitle = this.defaultTitle;
  }

  createAlbum(fileUploadResponseText){
    // console.log("fileUploadResponse", JSON.parse(fileUploadResponse.responseText));
    var fileUploadResponse = JSON.parse(fileUploadResponseText.responseText);
    var fileId = fileUploadResponse.fileId;
    console.log("File ID here: ", fileId);
    
    this.albumService.createAlbum(this.albumTitle, fileId)
    .subscribe(
      response => console.log("Response from create album: ", response),
      err => console.error('Create Albums got an error: ' + err),
      () => console.log('Create Albums got a complete notification')
    );
  
    this.albumTitle = this.defaultTitle;
    
  }

}
