import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {CheckUpdateService} from "./check-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa-app';
  updateAvailable: boolean = false;

  ngOnInit() {
    //subscribe in the component to the current message
    this.checkForUpdateService.updateAvailable.subscribe(updateAvailable => this.updateAvailable = updateAvailable);
  }

  constructor(private checkForUpdateService: CheckUpdateService) {}

  runUpdate() {
    document.location.reload();
  }
}
