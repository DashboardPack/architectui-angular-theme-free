import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-box',
  templateUrl: './notifications-box.html',
  styleUrls: ['./notifications-box.scss'],
  standalone: false
})
export class NotificationsBoxComponent implements OnInit {
  notifications = [
    {
      id: 1,
      message: 'New version available for download',
      time: '2 min ago',
      icon: 'pe-7s-cloud-download',
      iconBg: 'bg-success text-white',
      read: false
    },
    {
      id: 2,
      message: 'John Doe registered a new account',
      time: '15 min ago',
      icon: 'pe-7s-user',
      iconBg: 'bg-info text-white',
      read: false
    },
    {
      id: 3,
      message: 'Server CPU usage above 90%',
      time: '1 hour ago',
      icon: 'pe-7s-attention',
      iconBg: 'bg-warning text-dark',
      read: false
    },
    {
      id: 4,
      message: 'Monthly report is ready',
      time: '3 hours ago',
      icon: 'pe-7s-graph1',
      iconBg: 'bg-primary text-white',
      read: true
    }
  ];

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  constructor() { }

  ngOnInit(): void {
  }
}