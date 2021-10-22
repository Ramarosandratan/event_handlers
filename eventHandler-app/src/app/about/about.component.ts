import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "Event Handler";

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  events = [
    "Weeding",
    "Birthday",
    "Baptem",
    "Ceremony"
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl:['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   }

  ngOnInit(): void {}

}
