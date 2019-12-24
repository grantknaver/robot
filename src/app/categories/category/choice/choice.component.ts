import { Component, OnInit, Input } from '@angular/core';

// Models
import { Choice } from '../../../models/choice.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
   @Input() choiceInfo: any;
   @Input() choiceSelected: number;
   choice: Choice;
   choiceTitle: string;
   choiceDescription: string;
   choiceImg: string;

  constructor(
    // private router: Router
    ) {


  }

  ngOnInit() {
    this.choice = this.choiceInfo.choice;
  }

  useChoice() {
    if (this.choiceInfo.choiceIndex === this.choiceSelected) {
      // this.router.navigate([]);
    }
  }
}
