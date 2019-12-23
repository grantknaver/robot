import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { ChoiceComponent } from './categories/category/choice/choice.component';
import { CategoriesService } from '../app/services/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
