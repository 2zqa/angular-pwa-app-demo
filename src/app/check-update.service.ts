import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckUpdateService {
  private updateAvailableSubject = new BehaviorSubject<boolean>(false);
  updateAvailable = this.updateAvailableSubject.asObservable();

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => this.updateAvailableSubject.next(true));
  }
}
