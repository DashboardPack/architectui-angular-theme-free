import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartEvent, ActiveElement } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  standalone: false
})
export class LineChartComponent {
  public chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin'
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'red',
        fill: 'origin'
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Series C',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,255,0,0.3)',
        borderColor: 'yellow',
        pointBackgroundColor: 'yellow',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'yellow',
        fill: 'origin'
      }
    ]
  };
  
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      x: {
        display: true
      },
      y: {
        display: true,
        position: 'left'
      },
      y1: {
        display: true,
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
    plugins: {
      legend: {
        display: true
      }
    }
  };
  
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() { }


  public randomize(): void {
    for (let i = 0; i < this.chartData.datasets.length; i++) {
      for (let j = 0; j < this.chartData.datasets[i].data.length; j++) {
        this.chartData.datasets[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.chartData.datasets.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.chartData.labels!.push(`Label ${this.chartData.labels!.length}`);
  }

  public changeColor() {
    // Update color directly in the dataset
    if (this.chartData.datasets[2]) {
      this.chartData.datasets[2].borderColor = 'green';
      this.chartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
    }
  }

  public changeLabel() {
    if (this.chartData.labels) {
      this.chartData.labels[2] = 'Updated Label';
    }
  }
}
