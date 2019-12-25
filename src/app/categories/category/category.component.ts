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
  @Input() selected: number;
  @Input() currentCategory: number;
  // categoryTitle: string;
  // choices: Choice[];
  // expanded: boolean;
  // choiceSelected: number;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    // this.expanded = false;
    // this.categoryTitle = this.category.categoryTitle;
    // this.choices = this.category.categoryChoices;
    // this.choiceSelected = 0;
    this.categoriesService.expandedArray.push({index: this.currentCategory, expanded: false});
  }

  expand() {
    // this.expanded = !this.expand;
    this.categoriesService.expandedArray.forEach((i) => {
      if (i.index !== this.currentCategory) {
        i.expanded = false;
      }
    });
    this.categoriesService.expandedArray[this.currentCategory].expanded =
    !this.categoriesService.expandedArray[this.currentCategory].expanded;
  }

  // changeSelection(direction: string) {
  //   if (direction === 'down') {
  //     if (this.choiceSelected !== 0) {
  //       this.choiceSelected--;
  //     }
  //   } else {
  //     if (this.choiceSelected !== this.choices.length - 1) {
  //       this.choiceSelected++;
  //     }
  //   }
  // }

}
