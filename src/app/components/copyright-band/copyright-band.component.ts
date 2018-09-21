import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright-band',
  templateUrl: './copyright-band.component.html',
  styleUrls: ['./copyright-band.component.css']
})
export class CopyrightBandComponent implements OnInit {

  copyRightYear = (new Date()).getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
