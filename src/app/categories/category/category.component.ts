import { Component, OnInit, Input, Output } from '@angular/core';

// models
import { Category } from '../../models/category.model';
import { Choice } from '../../models/choice.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;
  categoryTitle: string;
  choices: Choice[];
  expanded: boolean;
  choiceSelected: number;

  constructor() { }

  ngOnInit() {
    this.categoryTitle = this.category.categoryTitle;
    this.choices = this.category.categoryChoices;
    this.expanded = false;
    this.choiceSelected = 0;
  }

  expand() {
    this.expanded = !this.expanded;
  }

  changeSelection(direction: string) {
    if (direction === 'down') {
      if (this.choiceSelected !== 0) {
        this.choiceSelected--;
      }
    } else {
      if (this.choiceSelected !== this.choices.length - 1) {
        this.choiceSelected++;
      }
    }
  }

}
