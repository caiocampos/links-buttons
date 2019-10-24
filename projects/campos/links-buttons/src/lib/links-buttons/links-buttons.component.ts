import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';

import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'lb-group',
  templateUrl: './links-buttons.component.html',
  styleUrls: ['./links-buttons.component.scss']
})
export class LinksButtonsComponent implements OnInit {
  @ContentChildren(LinkComponent) links: QueryList<LinkComponent>;
  @Input() position: string;
  @Input() text: string;

  direction: string;
  show = false;

  constructor() { }

  ngOnInit() {
    const dir = this.position ? this.position.charAt(0) : ' ';
    this.direction = dir === 'l' || dir === 'r' ? 'vertical' : 'horizontal';
  }

}
