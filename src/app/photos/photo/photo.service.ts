import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';


@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {

    }

    private API = 'http://localhost:3000/';

    getPhotos(nomeUser: string) {
        return this.http.get<Photo[]>(this.API + nomeUser + `/photos`);
    }
}