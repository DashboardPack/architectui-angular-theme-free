import { Component } from '@angular/core';
import { ChartType, ChartConfiguration, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  standalone: false
})
export class DynamicChartComponent {
  public chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(54,162,235,0.2)',
        borderColor: 'rgba(54,162,235,1)',
        borderWidth: 1
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { x: {}, y: {} },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  constructor() {
  }


  // events
  public chartClicked({event, active}: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({event, active}: { event?: ChartEvent, active?: object[] }): void {
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}
