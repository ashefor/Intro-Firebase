import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  public publishpost: any[];
  allpost = [];
  test = [];
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.publishpost;
    console.log(this.publishpost);
  }
  auto_grow(event){
    // console.log(event)
    event.target.style.height = "auto"
    if(event.target.scrollHeight < 500){
      event.target.style.height = "500px"
    }else{
      event.target.style.height= event.target.scrollHeight+"px"
    }
  }

  makeapost = this.fb.group({
    title: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    publish: []
  })

  get f() {return this.makeapost.controls}

  subscriptionForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
  })

  savePost(){
    const mail = this.f.title.value;
    const description = this.f.description.value;
    const publish = this.f.publish.value;
    if(this.f.publish.value === 'yes' ){
      // this.router.navigate(['home']);
      alert('Published Post')
      console.log(this.allpost)
    }else{
    console.log(this.makeapost.value)
    window.alert('Saved Post')
    }
  }

  select(event){
    console.log(event)
    this.publishpost = event.srcElement.value;
    console.log(this.publishpost)
  }
  subscribe(){
    console.log(this.subscriptionForm.value)
  }
}
