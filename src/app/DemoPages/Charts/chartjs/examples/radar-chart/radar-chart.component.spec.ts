import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RadarChartComponent } from './radar-chart.component';
import { BaseChartDirective } from 'ng2-charts';

describe('RadarChartComponent', () => {
  let component: RadarChartComponent;
  let fixture: ComponentFixture<RadarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RadarChartComponent],
      imports: [
        BaseChartDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
