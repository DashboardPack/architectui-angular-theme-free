import { Component } from '@angular/core';
import { ChartType, ChartConfiguration, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  standalone: false
})
export class DoughnutChartComponent {
  public chartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: [
          'rgba(255,99,132,0.2)',
          'rgba(54,162,235,0.2)',
          'rgba(255,205,86,0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54,162,235,1)', 
          'rgba(255,205,86,1)'
        ],
        borderWidth: 1
      },
      {
        data: [50, 150, 120],
        backgroundColor: [
          'rgba(75,192,192,0.2)',
          'rgba(153,102,255,0.2)',
          'rgba(255,159,64,0.2)'
        ],
        borderColor: [
          'rgba(75,192,192,1)',
          'rgba(153,102,255,1)',
          'rgba(255,159,64,1)'
        ],
        borderWidth: 1
      },
      {
        data: [250, 130, 70],
        backgroundColor: [
          'rgba(255,206,86,0.2)',
          'rgba(54,162,235,0.2)',
          'rgba(255,99,132,0.2)'
        ],
        borderColor: [
          'rgba(255,206,86,1)',
          'rgba(54,162,235,1)',
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      }
    ]
  };

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartPlugins = [];

  constructor() {
  }


  // events
  public chartClicked({event, active}: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({event, active}: { event?: ChartEvent, active?: object[] }): void {
  }
}
