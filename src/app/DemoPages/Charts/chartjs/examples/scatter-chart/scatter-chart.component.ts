import { Component } from '@angular/core';
import { ChartType, ChartConfiguration, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  standalone: false,
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent {
  public chartData: ChartConfiguration<'scatter'>['data'] = {
    datasets: [
      {
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: -2 },
          { x: 4, y: 4 },
          { x: 5, y: -3 },
        ],
        label: 'Series A',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        pointRadius: 10,
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)'
      },
    ]
  };

  public scatterChartOptions: ChartConfiguration<'scatter'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };

  public scatterChartType: ChartType = 'scatter';
  public scatterChartPlugins = [];

  constructor() { }


  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }
}
