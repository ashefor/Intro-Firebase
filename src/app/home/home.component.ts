import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countlikes = 0;
  showCounts = false;
  showmenu = false;
  showmenu2 = true;
  hidepost = false;
  likescount = []
  likestotalcount = []

  constructor(private http: HttpClient, private fb: FormBuilder, private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.addEventListener('click', this.onMouseEnter);
  }

  ngOnDestroy() {
    this.element.nativeElement.removeEventListener('click', this.onMouseEnter);
  }

  onMouseEnter() {
    const openrightmenu = document.getElementById('rightmenu')
    const openleftmenu = document.getElementById('leftmenu')
    const rightmenu = document.getElementById('side-container-right')
    const leftmenu = document.getElementById('side-container-left')
    //  alert("Don't touch my bacon!");
     if(event.target == openrightmenu){
      // box.style.display = 'none';
      rightmenu.style.display = 'block'
     }if(event.target == openleftmenu){
      // box.style.display = 'none';
      leftmenu.style.display = 'block'
     }if(event.target == rightmenu){
      rightmenu.style.display = 'none'
     }if(event.target == leftmenu){
      leftmenu.style.display = 'none'
     }else{
       return;
     }
     
  }
  addLikes(){
    this.countlikes++
    if(this.countlikes === 0){
      this.showCounts = false
    }else{
      this.showCounts = true
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
