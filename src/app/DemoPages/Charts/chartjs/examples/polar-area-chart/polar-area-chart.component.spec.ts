import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, PolarAreaController, RadialLinearScale, ArcElement, Legend, Tooltip } from 'chart.js';

import { PolarAreaChartComponent } from './polar-area-chart.component';
import { BaseChartDirective } from 'ng2-charts';

// Register Chart.js components for testing
Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Legend, Tooltip);

describe('PolarAreaChartComponent', () => {
  let component: PolarAreaChartComponent;
  let fixture: ComponentFixture<PolarAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolarAreaChartComponent],
      imports: [
        BaseChartDirective,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PolarAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
