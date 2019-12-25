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
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription'
          },
          {
            choiceTitle: 'choiceTitle 2',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 2'
          },
          {
            choiceTitle: 'choiceTitle 3',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 3'
          },
          {
            choiceTitle: 'choiceTitle 4',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 4'
          },
          {
            choiceTitle: 'choiceTitle 5',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 5'
          }
        ]
      },
      // category
      {
        categoryTitle: 'category2',
        categoryChoices: [
          {
            choiceTitle: 'choiceTitle 5',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 5'
          },
          {
            choiceTitle: 'choiceTitle 6',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 6'
          },
          {
            choiceTitle: 'choiceTitle 7',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 7'
          },
          {
            choiceTitle: 'choiceTitle 8',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 8'
          },
          {
            choiceTitle: 'choiceTitle 9',
            choiceImg: '../../assets/example.jpg',
            choiceDescription: 'choiceDescription 9'
          }
        ]
      }
      // category
    ];
  }

}
