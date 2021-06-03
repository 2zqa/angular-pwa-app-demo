import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa-app';

  routes = [
    { path: '', name: 'Home' },
    { path: 'about', name: 'About me' }
  ];
}
