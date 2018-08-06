import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';


@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {

    }

    private API = 'http://localhost:3000/';

    listFromUser(nomeUser: string) {
        return this.http.get<Photo[]>(this.API + nomeUser + `/photos`);
    }

    listFromUserPaginated(nomeUser: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
        return this.http.get<Photo[]>(this.API + nomeUser + `/photos`, { params });
    }
}