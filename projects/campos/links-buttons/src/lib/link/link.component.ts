import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lb-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;
  @Input() img: string;

  constructor() { }

  ngOnInit() {
  }

}
