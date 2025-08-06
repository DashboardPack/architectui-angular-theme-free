import { Component } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  standalone: false,  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent {
  // scatter
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };
  public scatterChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public scatterChartData: ChartDataset[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
