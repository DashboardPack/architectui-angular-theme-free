import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, ScatterController, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

import { ScatterChartComponent } from './scatter-chart.component';
import { BaseChartDirective } from 'ng2-charts';

// Register Chart.js components for testing
Chart.register(ScatterController, LinearScale, PointElement, Legend, Tooltip);

describe('ScatterChartComponent', () => {
  let component: ScatterChartComponent;
  let fixture: ComponentFixture<ScatterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScatterChartComponent],
      imports: [
        BaseChartDirective,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScatterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
