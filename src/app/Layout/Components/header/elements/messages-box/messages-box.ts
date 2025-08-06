import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-box',
  templateUrl: './messages-box.html',
  styleUrls: ['./messages-box.scss'],
  standalone: false
})
export class MessagesBoxComponent implements OnInit {
  messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      preview: 'Are you available for a quick call?',
      time: '2m',
      avatar: './assets/images/avatars/2.jpg',
      read: false
    },
    {
      id: 2,
      sender: 'Michael Chen',
      preview: 'I\'ve sent you the project files',
      time: '30m',
      avatar: './assets/images/avatars/3.jpg',
      read: false
    },
    {
      id: 3,
      sender: 'Emily Davis',
      preview: 'Meeting rescheduled to 3 PM',
      time: '1h',
      avatar: './assets/images/avatars/4.jpg',
      read: true
    },
    {
      id: 4,
      sender: 'David Wilson',
      preview: 'Great work on the presentation!',
      time: '2h',
      avatar: './assets/images/avatars/5.jpg',
      read: true
    }
  ];

  get unreadCount(): number {
    return this.messages.filter(m => !m.read).length;
  }

  constructor() { }

  ngOnInit(): void {
  }
}