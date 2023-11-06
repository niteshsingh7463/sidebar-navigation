import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  list =[
    {
      number: '1',
      name:'home',
      icon:'fa-solid fa-house'
    },
    {
      number: '2',
      name:'Anlytics',
      icon:'fa-solid fa-chart-line'
    },
    {
      number: '3',
      name:'Products',
      icon:'fa-solid fa-box'
    },
    {
      number: '4',
      name:'order',
      icon:'fa-solid fa-cart-shopping'
    },
    {
      number: '5',
      name:'Settings',
      icon:'fa-solid fa-gear'
    },

  ]

  @Input() sideNavStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

}
