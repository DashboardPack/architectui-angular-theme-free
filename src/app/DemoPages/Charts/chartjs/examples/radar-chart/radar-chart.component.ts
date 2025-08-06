import { Component } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  standalone: false,  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  // Radar
  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataset[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
