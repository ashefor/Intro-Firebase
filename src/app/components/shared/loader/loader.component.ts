import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from 'src/app/services/loader-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  
  isLoading: Subject<boolean> = this.loaderservice.isLoading;
  constructor(private loaderservice: LoaderServiceService) { }

  ngOnInit() {
  }

}
