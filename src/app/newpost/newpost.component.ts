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
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.publishpost;
    console.log(this.publishpost);
    // this.select(Event.target)
  }
  // auto_grow(element) {
  //   element.style.height = "5px";
  //   element.style.height = (element.scrollHeight)+"px";
  // }

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
    if((this.f.publish.value === 'no') || (this.f.publish.value !== "yes") ){
      window.alert('Saved Post')
    }else{
    // console.log(mail, description, publish)
    console.log(this.makeapost.value)
    this.router.navigate(['articles'])
    }
  }

  select(event){
    // console.log(event.target.value)
    // event.srcElement.checked
    console.log(event)
    this.publishpost = event.srcElement.value;
    console.log(this.publishpost)
  }
}
