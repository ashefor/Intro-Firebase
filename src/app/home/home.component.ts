import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showmenu = false;
  showmenu2 = true;
  hidepost = false;
  

  constructor(private http: HttpClient, private fb: FormBuilder, private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.addEventListener('click', this.onMouseEnter);
  }

  ngOnDestroy() {
    this.element.nativeElement.removeEventListener('click', this.onMouseEnter);
  }

  onMouseEnter() {
    let parent = ( <HTMLElement>event.target ).parentElement;
    let box1 = document.getElementById('box1')
    let box3 = document.querySelectorAll('.side-containers-content')
    let box = document.getElementById('lightmenu')
    let box2 = document.getElementById('side-container-right')
    let children = box3[1]
    console.log(parent)
    //  alert("Don't touch my bacon!");
     if(event.target == box){
      // box.style.display = 'none';
      console.log('test')
      box2.style.display = 'block'
     }else if(event.target == box2){
      box2.style.display = 'none'
     }
     
  }
  
  // callApi(){
  //   this.http.get('https://reqres.in/api/users?page=2').subscribe(data => {
  //     console.log(data)
  //   })
  // }

  subscriptionForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
  })

  submitForm() {
    window.alert('submitted')
  }
  

}
