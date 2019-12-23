import { Component, OnInit } from '@angular/core';

// Services
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;

  constructor(
    private categoriesService: CategoriesService
    ) { }

  ngOnInit() {
    this.categories = this.categoriesService.retrieveCategories();
  }

}
