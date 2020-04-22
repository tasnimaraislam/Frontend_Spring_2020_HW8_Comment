 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  albumId: string;

  afuConfig = {
    uploadAPI: {
      url: environment.API_BASE_URL + "/files/upload"
    }
  };

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
      
    });
  }

  uploadPhoto(fileUploadResponseText){
    // console.log("fileUploadResponse", JSON.parse(fileUploadResponse.responseText));
    var fileUploadResponse = JSON.parse(fileUploadResponseText.responseText);
    var fileId = fileUploadResponse.fileId;
    console.log("File ID here: ", fileId);
    
    this.photoService.uploadPhoto(this.albumId, fileId)
    .subscribe(
      response => console.log("Response from upload photo: ", response),
      err => console.error('Upload Photo got an error: ' + err),
      () => console.log('Upload Photo got a complete notification')
    );
    
  }

}
