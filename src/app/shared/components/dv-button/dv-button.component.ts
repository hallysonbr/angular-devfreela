import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dv-button',
  templateUrl: './dv-button.component.html',
  styleUrls: ['./dv-button.component.scss']
})
export class DvButtonComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
