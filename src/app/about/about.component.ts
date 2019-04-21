import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  subscriptionForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
  })

  onSubmit(){
    console.log('yay')
  }
}
