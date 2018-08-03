import { PipeTransform, Pipe } from '../../../../../node_modules/@angular/core';
import { Photo } from '../../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class filterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if (descriptionQuery)
            return photos.filter(photo => photo.description.includes(descriptionQuery))
        else
            return photos;
    }

}