import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  callUrl: string;
  categoryExpanded: number;
  expandedArray: {index: number, expanded: boolean}[] = [];

  constructor(
    // private http: HttpClient
    ) { }

  retrieveCategories() {

    // const params = new HttpParams()
    //     // .set('deviceid', deviceId);

    // // Make an HTTP get call
    // return this.http.get<any[]>(this.callUrl, { params: params })
    //     .pipe(map(data => {
    //         // We get back an array of objects
    //         if (data) {
    //             // const categories = this.translateMany(data.record);
    //             return data;
    //         } else {
    //             // this.errorService.handleTextError('cdr GET Error', JSON.stringify(data));
    //             // console.log('Error on GET to ' + this.callUrl + ' code is ' + data.successCode);
    //             // console.log('Data is ' + JSON.stringify(data));
    //             console.log('error has happened')
    //             return null;
    //         }
    //     })
    //     // ,
    //     // catchError((error: HttpErrorResponse) => {
    //     //     this.errorService.handleError(error);
    //     //     return observableThrowError(error);
    //     // })
    // );

    return [
      {
        categoryTitle: 'category1',
        categoryChoices: [
          {
            choiceTitle: 'choiceTitle',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription1 kjdsfjslfkjdslkfjslkdjflkdsjflkdsjflkdsjflkdsjf'
          },
          {
            choiceTitle: 'choiceTitle1',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription2 ksdjflkjdslfkjdslkfjdslkjflkdsjflkdsjflkdsjf'
          },
          {
            choiceTitle: 'choiceTitle2',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'sdlkfjlksdjflksdjflksdjflkdsjflkdsjflkdsjflksjflksdfj'
          },
          {
            choiceTitle: 'choiceTitle3',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription1 slkdfjlkdsjfjdslkfds sdfjlkdsjflkdsjflkdsjflkdsjf'
          },
          {
            choiceTitle: 'choiceTitle4',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription2 sdifjlksdjfksdjfkdsjfk'
          }
        ]
      },
      // category
      {
        categoryTitle: 'category2',
        categoryChoices: [
          {
            choiceTitle: 'choiceTitle5',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription5'
          },
          {
            choiceTitle: 'choiceTitle6',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription6'
          },
          {
            choiceTitle: 'choiceTitle7',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription7'
          },
          {
            choiceTitle: 'choiceTitle1',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription1'
          },
          {
            choiceTitle: 'choiceTitle2',
            choiceImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            choiceDescription: 'choiceDescription2'
          }
        ]
      }
      // category
    ];
  }

}
