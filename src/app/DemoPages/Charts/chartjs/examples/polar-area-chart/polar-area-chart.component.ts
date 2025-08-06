import { Component } from '@angular/core';
import { ChartConfiguration, ChartType, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  standalone: false,  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent {
  // PolarArea chart using ng2-charts v6 API
  public polarAreaChartType: ChartType = 'polarArea';
  
  public polarAreaChartData: ChartConfiguration<'polarArea'>['data'] = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
    datasets: [{
      data: [300, 500, 100, 40, 120],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 205, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };

  public polarAreaChartOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: false
      }
    }
  };

  constructor() { }


  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }
}
