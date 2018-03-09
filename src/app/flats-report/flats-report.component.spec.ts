import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsReportComponent } from './flats-report.component';

describe('FlatsReportComponent', () => {
  let component: FlatsReportComponent;
  let fixture: ComponentFixture<FlatsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
