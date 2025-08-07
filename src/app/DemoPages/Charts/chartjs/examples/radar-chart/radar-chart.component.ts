import { Component } from '@angular/core';
import { ChartType, ChartConfiguration, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  standalone: false,
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {
  public chartData: ChartConfiguration<'radar'>['data'] = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        data: [65, 59, 90, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)'
      },
      {
        data: [28, 48, 40, 19, 96, 27, 100],
        label: 'Series B',
        backgroundColor: 'rgba(54,162,235,0.2)',
        borderColor: 'rgba(54,162,235,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54,162,235,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54,162,235,1)'
      }
    ]
  };

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };

  public radarChartType: ChartType = 'radar';
  public radarChartPlugins = [];

  constructor() { }


  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }
}
