import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScatterChartComponent } from './scatter-chart.component';
import { BaseChartDirective } from 'ng2-charts';

describe('ScatterChartComponent', () => {
  let component: ScatterChartComponent;
  let fixture: ComponentFixture<ScatterChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ScatterChartComponent],
      imports: [
        BaseChartDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
