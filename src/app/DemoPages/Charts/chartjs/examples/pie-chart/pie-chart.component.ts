import { Component } from '@angular/core';
import { ChartType, ChartConfiguration, ChartEvent, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: false,
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  public chartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Downloads', 'In Store Sales', 'Mail Sales'],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,205,86,0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,205,86,1)'],
        borderWidth: 1
      }
    ]
  };
  
  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };
  
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [];

  constructor() { }


  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: object[] }): void {
  }

  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.chartData.labels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  addSlice() {
    this.chartData.labels!.push('New Slice');
    this.chartData.datasets[0].data.push(400);
    (this.chartData.datasets[0].backgroundColor as string[]).push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.chartData.labels!.pop();
    this.chartData.datasets[0].data.pop();
    (this.chartData.datasets[0].backgroundColor as string[]).pop();
  }

  changeLegendPosition() {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
    }
  }
}
