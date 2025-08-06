import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolarAreaChartComponent } from './polar-area-chart.component';
import { BaseChartDirective } from 'ng2-charts';

describe('PolarAreaChartComponent', () => {
  let component: PolarAreaChartComponent;
  let fixture: ComponentFixture<PolarAreaChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PolarAreaChartComponent],
      imports: [
        BaseChartDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
