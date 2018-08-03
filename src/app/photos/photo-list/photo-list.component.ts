import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = ''

  constructor(
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {
    const userName = this.activateRoute.snapshot.params.userName;
    this.photoService
      .getPhotos(userName)
      .subscribe(photo => this.photos = photo,
        err => console.log('Deu ruim'));
  }

}
