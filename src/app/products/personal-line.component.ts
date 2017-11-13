import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personal-line',
  templateUrl: './personal-line.component.html',
  styleUrls: ['./personal-line.component.css']
})


export class PersonalLineComponent {

  constructor(private dataService:DataService) {
  }
  products=[];
  ngOnInit() {
    this.products = this.dataService.products;
  }
}
