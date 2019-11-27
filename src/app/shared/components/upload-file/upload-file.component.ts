import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../services/api.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  selecteFile: File = null;
  urlImage = '';

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onFileSelected(event: Event) {
    console.log(event);

    this.selecteFile = event.target['files'][0] as File;
  }

  onUploadFile() {
    const formData = new FormData();
    const apiUploadImage = 'https://api.imgur.com/3/image';
    let headers = new HttpHeaders();
    const clientID = 'e4e88b7c6f01280';
    const clientSecret = '26dd6612d61cb8fa54af7a256db4e76fc95727a9';
    const accessToken = '54902af3defb11efff316078465dd9ff180bd28f';
    const refreshToken = '13499e543cf39c41db1914c21969ed59aeb33537';
    headers = headers.set('Authorization', `Bearer ${accessToken}`);
    formData.append('image', this.selecteFile, this.selecteFile.name);
    this.http.post(apiUploadImage, formData, { headers })
      .subscribe(
        (res: any) => {
          this.urlImage = res.data.link;
          console.log(res.data);
        }
      );
  }
}
