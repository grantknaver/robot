import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

// Models
import { Choice } from '../../../models/choice.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
   @Input() choiceInfo: any;
  //  @Input() choiceSelected: number;
  //  choice: Choice;
  //  choiceTitle: string;
  //  choiceDescription: string;
  //  choiceImg: string;

  constructor() {}

  ngOnInit() {}

  // useChoice() {
  //   if (this.choiceInfo.choiceIndex === this.choiceSelected) {
  //   }
  // }
}
