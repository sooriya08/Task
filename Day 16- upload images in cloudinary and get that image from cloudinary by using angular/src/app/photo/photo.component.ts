import { Component, OnInit,Input,NgZone } from '@angular/core';

import { FileUploader,FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { ImageService } from '../image.service';



@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  

  @Input()
  responses: Array<any>;

  private hasBaseDropZoneOver: boolean = false;
  public uploader :any;
  private title: any;


  imgUrl: string = 'https://res.cloudinary.com/dhf39kzim/image/upload/c_scale,w_357/v1623858283/ogqf9l2c3imoun7uypam.png';

  imageToShow: any;
  isImageLoading!: boolean;
  

  constructor(
    private cloudinary: Cloudinary,
    private zone: NgZone,
    private http: HttpClient,
    private dataservice: DataService,
    private imageService: ImageService
  ) {
    this.responses = [];
    this.title = '';
  }


    // onfileselected(event : any){
    //   this.uploader = this.dataservice.service
    //   this.uploader = event
    //   console.log(event)
    // }
    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
         this.imageToShow = reader.result;
      }, false);
   
      if (image) {
         reader.readAsDataURL(image);
      }
     }
   
     getImageFromService() {
         this.isImageLoading = true;
         this.imageService.getImage(this.imgUrl).subscribe(data => {
           this.createImageFromBlob(data);
           this.isImageLoading = false;
         }, error => {
           this.isImageLoading = false;
           console.log(error);
         });
     }

     upload(){

     }

     
      


   











  ngOnInit(): void {
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/dhf39kzim/image/upload`,
      
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };

    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary unsigned upload preset to the upload form
      form.append('upload_preset','m2h0p4yq' );

      // Add file to upload
      form.append('file', fileItem);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };

      

      

      
    };
  
   
    }
    fileOverBase(e: any): void {
      this.hasBaseDropZoneOver = e;
      
  }

  




}


  





