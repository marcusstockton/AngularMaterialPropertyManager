import { Component, OnInit, Input } from '@angular/core';
import { PortfolioListItemDto } from 'src/app/models/PortfolioListItemDto';

@Component({
  selector: 'app-portfolio-list-item',
  templateUrl: './portfolio-list-item.component.html',
  styleUrls: ['./portfolio-list-item.component.scss']
})
export class PortfolioListItemComponent implements OnInit {

  @Input() portfolio: PortfolioListItemDto;

  constructor() { }

  ngOnInit(): void {
  }

}
