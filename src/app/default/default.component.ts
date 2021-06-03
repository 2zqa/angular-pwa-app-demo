import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-component',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  routes = ['', 'about']

  ngOnInit(): void {
  }

}
