import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private image;

  constructor(
    private camera: Camera,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  onTakePicture() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }

    this.camera.getPicture(options).then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
      console.log('img:', this.image);
    }).catch(error => {
      console.error('error:',error);
    });
  }


}
