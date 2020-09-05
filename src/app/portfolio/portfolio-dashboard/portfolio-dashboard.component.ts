import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio/portfolio.service';
import { PortfolioListItemDto } from 'src/app/models/PortfolioListItemDto';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  data: PortfolioListItemDto[] = [];
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolios().subscribe(x => {
      this.data = x;
    });
  }



}
