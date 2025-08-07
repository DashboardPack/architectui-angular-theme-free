import {Component, ViewChild} from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-boxes3',
  templateUrl: './chart-boxes3.component.html',
  standalone: false,
  styles: []
})
export class ChartBoxes3Component {

  heading = 'Chart Boxes III';
  subheading = 'Highly configurable boxes best used for showing numbers in an user friendly way.';
  icon = 'pe-7s-wallet icon-gradient bg-plum-plate';

  @ViewChild(BaseChartDirective, { static: false }) chart!: BaseChartDirective;

  constructor() {
    // Generate sample data
    this.generateSampleData();
  }

  // Line Chart for Revenue Trend
  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      { 
        data: [], 
        label: 'Revenue',
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        fill: true
      }
    ]
  };
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    }
  };
  public lineChartType: ChartType = 'line';

  // Doughnut Chart for Product Distribution
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#e74c3c',
          '#f39c12',
          '#2ecc71',
          '#3498db',
          '#9b59b6'
        ],
        hoverBackgroundColor: [
          '#c0392b',
          '#d68910',
          '#27ae60',
          '#2980b9',
          '#8e44ad'
        ]
      }
    ]
  };
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true
        }
      }
    }
  };
  public doughnutChartType: ChartType = 'doughnut';

  // Bar Chart for Monthly Sales
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Sales',
        backgroundColor: '#2ecc71',
        hoverBackgroundColor: '#27ae60'
      }
    ]
  };
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  public barChartType: ChartType = 'bar';

  // Radar Chart for Performance Metrics
  public radarChartData: ChartData<'radar'> = {
    labels: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Information Technology', 'Administration'],
    datasets: [
      {
        data: [],
        label: 'Current Period',
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231, 76, 60, 0.2)',
        pointBackgroundColor: '#e74c3c'
      },
      {
        data: [],
        label: 'Previous Period',
        borderColor: '#95a5a6',
        backgroundColor: 'rgba(149, 165, 166, 0.2)',
        pointBackgroundColor: '#95a5a6'
      }
    ]
  };
  public radarChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0,0,0,0.1)'
        }
      }
    }
  };
  public radarChartType: ChartType = 'radar';

  private generateSampleData(): void {
    // Generate line chart data (last 7 days revenue)
    const now = new Date();
    const lineLabels: string[] = [];
    const lineData: number[] = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      lineLabels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      lineData.push(Math.floor(Math.random() * 50000) + 20000);
    }
    
    this.lineChartData.labels = lineLabels;
    this.lineChartData.datasets[0].data = lineData;

    // Generate doughnut chart data (product categories)
    this.doughnutChartData.datasets[0].data = [
      Math.floor(Math.random() * 100) + 50,
      Math.floor(Math.random() * 100) + 40,
      Math.floor(Math.random() * 100) + 30,
      Math.floor(Math.random() * 100) + 35,
      Math.floor(Math.random() * 100) + 25
    ];

    // Generate bar chart data (last 6 months)
    const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
    this.barChartData.labels = months;
    this.barChartData.datasets[0].data = months.map(() => Math.floor(Math.random() * 80) + 20);

    // Generate radar chart data (performance metrics)
    this.radarChartData.datasets[0].data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 40) + 60);
    this.radarChartData.datasets[1].data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 40) + 50);
  }

  // Chart interaction methods
  public chartClicked(event: any): void {
  }

  public chartHovered(event: any): void {
    // Handle hover events if needed
  }

  // Update data method
  public refreshData(): void {
    this.generateSampleData();
    if (this.chart) {
      this.chart.update();
    }
  }
}
