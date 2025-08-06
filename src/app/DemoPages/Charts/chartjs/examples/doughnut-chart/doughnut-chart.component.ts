import {Component} from '@angular/core';
import {ChartType} from 'chart.js';
// Label type removed in ng2-charts v6

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  standalone: false})
export class DoughnutChartComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[][] = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {
  }


  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
