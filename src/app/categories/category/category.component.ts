import { Component, OnInit, Input } from '@angular/core';

// Models
import { Category } from '../../models/category.model';
import { Choice } from '../../models/choice.model';

// Service
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  @Input() currentCategory: number;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.expandedArray.push({index: this.currentCategory, expanded: false});
  }

  expand() {
    this.categoriesService.expandedArray.forEach((i) => {
      if (i.index !== this.currentCategory) {
        i.expanded = false;
      }
    });
    this.categoriesService.expandedArray[this.currentCategory].expanded =
    !this.categoriesService.expandedArray[this.currentCategory].expanded;
  }

}
