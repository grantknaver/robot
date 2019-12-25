import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

// Models
import { Choice } from '../../../models/choice.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
   @Input() choices: Choice[];
   @Input() choiceInfo: { choice: Choice, choiceIndex: number };
   previousInfo: Choice;
   nextInfo: Choice;
  //  @Input() choiceSelected: number;
  //  choice: Choice;
  //  choiceTitle: string;
  //  choiceDescription: string;
  //  choiceImg: string;

  constructor() {}

  ngOnInit() {
    this.previousInfo =
    this.choices[this.assignChoice('previous', this.choiceInfo.choiceIndex, this.choices.length - 1)];
    this.nextInfo =
    this.choices[this.assignChoice('next', this.choiceInfo.choiceIndex, this.choices.length - 1)];
    console.log('previousInfo', this.previousInfo);
    console.log('currentInfo', this.choiceInfo.choice);
    console.log('nextInfo', this.nextInfo);
  }

  assignChoice(direction: string, index: number, numberOfChoices: number) {

    if (direction === 'previous') {
      if (index !== 0) {
        console.log('index - 1:::::::', index - 1);
        return index - 1;
      } else {
        console.log('index:::::::', index);
        return index;
      }
    } else {
      if (index !== numberOfChoices) {
        console.log('index + 1:::::::::', index + 1);
        return index + 1;
      }
    }
  }

  // useChoice() {
  //   if (this.choiceInfo.choiceIndex === this.choiceSelected) {
  //   }
  // }

}
