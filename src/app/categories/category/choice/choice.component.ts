import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  @Input() choice: any;
   choiceTitle: string;
   choiceDescription: string;
   choiceImg: string;

  constructor() {
  }

  ngOnInit() {
    console.log('choice is...', this.choice);
  }

}
