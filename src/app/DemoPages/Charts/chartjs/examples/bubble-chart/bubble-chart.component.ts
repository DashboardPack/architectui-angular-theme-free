import { Component } from '@angular/core';
import { ChartType, ChartConfiguration, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  standalone: false
})
export class BubbleChartComponent {
  public chartData: ChartConfiguration<'bubble'>['data'] = {
    datasets: [
      {
        data: [
          { x: 10, y: 10, r: 10 },
          { x: 15, y: 5, r: 15 },
          { x: 26, y: 12, r: 23 },
          { x: 7, y: 8, r: 8 },
        ],
        label: 'Series A',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153,102,255,0.8)',
        hoverBorderColor: 'rgba(153,102,255,1)',
      },
    ]
  };

  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: 30
      },
      y: {
        min: 0,
        max: 30
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartPlugins = [];

  constructor() {
  }


  // events
  public chartClicked({event, active}: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({event, active}: { event?: ChartEvent, active?: object[] }): void {
  }

  private rand(max: number) {
    return Math.trunc(Math.random() * max);
  }

  private randomPoint(maxCoordinate: number) {
    const x = this.rand(maxCoordinate);
    const y = this.rand(maxCoordinate);
    const r = this.rand(30) + 5;
    return {x, y, r};
  }

  public randomize(): void {
    const numberOfPoints = this.rand(5) + 5;
    const data = Array.apply(null, {length: numberOfPoints}).map(r => this.randomPoint(30));
    this.chartData.datasets[0].data = data;
  }
}
