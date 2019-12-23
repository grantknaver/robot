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

  constructor() { }

  ngOnInit() {
    this.categoryTitle = this.category.categoryTitle;
    this.choices = this.category.categoryChoices;
    this.expanded = false;
  }

  expand() {
    this.expanded = !this.expanded;
  }

}
