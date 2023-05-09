import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dv-wrapper',
  templateUrl: './dv-wrapper.component.html',
  styleUrls: ['./dv-wrapper.component.scss']
})
export class DvWrapperComponent implements OnInit {
  @Input() type: 'one-col' | 'two-col' = 'two-col';
  @Input() back: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
