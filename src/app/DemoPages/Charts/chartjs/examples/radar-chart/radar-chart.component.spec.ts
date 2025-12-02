import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Legend, Tooltip } from 'chart.js';

import { RadarChartComponent } from './radar-chart.component';
import { BaseChartDirective } from 'ng2-charts';

// Register Chart.js components for testing
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Legend, Tooltip);

describe('RadarChartComponent', () => {
  let component: RadarChartComponent;
  let fixture: ComponentFixture<RadarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadarChartComponent],
      imports: [
        BaseChartDirective,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
