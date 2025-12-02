import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, PieController, ArcElement, Legend, Tooltip } from 'chart.js';

import { PieChartComponent } from './pie-chart.component';
import { BaseChartDirective } from 'ng2-charts';

// Register Chart.js components for testing
Chart.register(PieController, ArcElement, Legend, Tooltip);

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieChartComponent],
      imports: [
        BaseChartDirective,
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
