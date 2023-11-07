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
      name:'InfoQuest Library',
      icon:'fa-solid fa-house'
    },
    {
      number: '2',
      name:'Quest Drafts ',
      icon:'fa-solid fa-chart-line'
    },
    {
      number: '3',
      name:'Directory ',
      icon:'fa-solid fa-box'
    },
    {
      number: '4',
      name:'Downloads ',
      icon:'fa-solid fa-cart-shopping'
    },
    {
      number: '5',
      name:'Message Center',
      icon:'fa-solid fa-gear'
    },
    {
      number: '6',
      name:'Settings',
      icon:'fa-solid fa-gear'
    },
  ]

  @Input() sideNavStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

}
