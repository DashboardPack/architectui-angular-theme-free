import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs-charts',
  templateUrl: './docs-charts.component.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsChartsComponent {
  protected readonly tsExample = `import { ChartConfiguration, ChartType } from 'chart.js';

@Component({ /* … */ })
export class PieChartComponent {
  chartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Downloads', 'In Store Sales', 'Mail Sales'],
    datasets: [{ data: [300, 500, 100] }],
  };

  chartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
  };

  chartType: ChartType = 'pie';
}`;

  protected readonly htmlExample = `<canvas baseChart
        [data]="chartData"
        [type]="chartType"
        [options]="chartOptions">
</canvas>`;
}
