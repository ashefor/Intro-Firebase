import { Component, OnInit } from '@angular/core';
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
  hidepost= false;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    // this.resizeWindow()
  }

  // callApi(){
  //   this.http.get('https://reqres.in/api/users?page=2').subscribe(data => {
  //     console.log(data)
  //   })
  // }
  
  subscriptionForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
  })

  submitForm(){
    window.alert('me')
  }

  default(event){
    event.preventDefault()
  }
  resizeWindow(){
    if(window.outerWidth <= 479){
        this.showmenu = true;
    }else{
      this.showmenu2 = false;
    }
  }

  // closedrop(event){
  //   let box = document.querySelector('.dropdown-content')
  //   document.addEventListener("click", (event)=>{
  //     if(event.target.className === '.dropdown.content'){
  //       box.classList.add(".hide")
  //       console.log(event.target.className)
  //     }
  //   })
  // }
}
