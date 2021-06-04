import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

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
    this.swUpdate.available.subscribe(() => this.updateAvailable = true)
  }

  constructor(private swUpdate: SwUpdate) {}

  runUpdate() {
    document.location.reload();
  }
}
