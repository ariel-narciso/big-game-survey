import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-navigate',
  templateUrl: './button-navigate.component.html',
  styleUrls: ['./button-navigate.component.css']
})
export class ButtonNavigateComponent implements OnInit {

  @Input() data?: {buttonName: string ,routerLink: string};

  constructor() { }

  ngOnInit(): void {
  }

}
