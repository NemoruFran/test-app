import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClickReset = () => {
    this.username = "";
  }

}
