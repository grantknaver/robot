import { Component } from '@angular/core';

import { Category } from '../app/models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robot';
  categories: Category[];
}
