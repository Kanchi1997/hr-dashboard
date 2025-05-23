import { Component } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  summaryData = [
    { label: 'Total Employees', value: 120, icon: '👥' },
    { label: 'Active Leaves', value: 5, icon: '🌴' },
    { label: 'Departments', value: 6, icon: '🏢' },
    { label: 'New Requests', value: 8, icon: '📩' }
  ];

  recentActivity = [
    'Added new employee John Doe',
    'Approved leave for Jane Smith',
    'Updated department Finance',
    'Employee Mark promoted to Manager'
  ];

  employees = [
    {
      avatar: 'https://i.pravatar.cc/150?img=1',
      name: 'Alice Johnson',
      role: 'Developer',
      department: 'IT',
      status: 'Active'
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=2',
      name: 'David Smith',
      role: 'HR Manager',
      department: 'HR',
      status: 'Pending'
    },
    {
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'Emma Watson',
      role: 'Accountant',
      department: 'Finance',
      status: 'Inactive'
    }
  ];


 ngAfterViewInit(): void {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2006', '2007', '2008'],
        datasets: [
          {
            label: 'Series A',
            data: [65, 59, 80],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1
          },
          {
            label: 'Series B',
            data: [28, 48, 40],
            backgroundColor: 'rgba(153,102,255,0.4)',
            borderColor: 'rgba(153,102,255,1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}