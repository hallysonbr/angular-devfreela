import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dv-wrapper',
  templateUrl: './dv-wrapper.component.html',
  styleUrls: ['./dv-wrapper.component.scss']
})
export class DvWrapperComponent implements OnInit {
  @Input() type: 'one-col' | 'two-col' = 'two-col';

  constructor() { }

  ngOnInit(): void {
  }
}
