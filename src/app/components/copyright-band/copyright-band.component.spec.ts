import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightBandComponent } from './copyright-band.component';

describe('CopyrightBandComponent', () => {
  let component: CopyrightBandComponent;
  let fixture: ComponentFixture<CopyrightBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
