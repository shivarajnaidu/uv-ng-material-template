import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  subsject = new BehaviorSubject('My Admin');

  constructor(
    private title: Title
  ) { }

  setTitle(title: string | undefined) {
    if (!title) {
      title = 'My Admin';
    }

    this.title.setTitle(title === 'My Admin' ? title : `${title} - My Admin`);
    this.subsject.next(title);
  }
}
