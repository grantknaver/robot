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

  constructor() {}

  ngOnInit() {
    this.previousInfo =
    this.choices[this.assignChoice('previous', this.choiceInfo.choiceIndex, this.choices.length - 1)];
    this.nextInfo =
    this.choices[this.assignChoice('next', this.choiceInfo.choiceIndex, this.choices.length - 1)];
  }

  assignChoice(direction: string, index: number, numberOfChoices: number) {
    if (direction === 'previous') {
      if (index !== 0) {
        return index - 1;
      } else {
        return index;
      }
    } else {
      if (index !== numberOfChoices) {
        return index + 1;
      }
    }
  }

}
