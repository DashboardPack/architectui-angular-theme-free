import { Component } from '@angular/core';
import { faTh, faCheck, faTrash, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  standalone: false})
export class AnalyticsComponent {

  faTh = faTh;
  faCheck = faCheck;
  faTrash = faTrash;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  heading = 'Analytics Dashboard';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Helpdesk Tickets',
        data: [65, 59, 80, 81, 56, 55, 40, 48],
        backgroundColor: 'rgba(247, 185, 36, 0.2)',
        borderColor: '#f7b924',
        borderWidth: 4,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#f7b924',
        pointBorderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };
  
  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets2 = [
    {
      label: 'My First dataset',
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets3 = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

      // Colors now configured in dataset
      backgroundColor: 'rgba(247, 185, 36, 0.2)',
      borderColor: '#f7b924',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f7b924',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f7b924',
    }
  ];

  public lineChartColors2 = [
    { // dark grey
      backgroundColor: 'rgba(48, 177, 255, 0.2)',
      borderColor: '#30b1ff',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#30b1ff',
      pointBackgroundColor: '#ffffff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#30b1ff',
    },
  ];

  public lineChartColors3 = [
    { // dark grey
      backgroundColor: 'rgba(86, 196, 121, 0.2)',
      borderColor: '#56c479',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#56c479',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#56c479',
    },
  ];

  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      y: {
        ticks: {
          display: false,
          beginAtZero: true
        },
        grid: {
          display: false
        }
      },
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    },
    plugins: { 
      legend: {
        display: false
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };


}
