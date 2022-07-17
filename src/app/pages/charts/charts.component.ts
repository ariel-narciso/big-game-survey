import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  data = {
    buttonName: 'VER TABELA',
    routerLink: '/records'
  };

  constructor() { }
}
