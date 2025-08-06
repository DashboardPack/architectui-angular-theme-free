import {Component} from '@angular/core';
import {ChartOptions, ChartType, ChartDataset} from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  standalone: false})
export class BubbleChartComponent {
  public bubbleChartOptions: ChartOptions = {
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
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataset[] = [
    {
      data: [
        {x: 10, y: 10, r: 10},
        {x: 15, y: 5, r: 15},
        {x: 26, y: 12, r: 23},
        {x: 7, y: 8, r: 8},
      ],
      label: 'Series A',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];

  public bubbleChartColors = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  constructor() {
  }


  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
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
    this.bubbleChartData[0].data = data;
  }
}
