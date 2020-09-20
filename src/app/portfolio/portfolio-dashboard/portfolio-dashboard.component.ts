import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio/portfolio.service';
import { PortfolioListItemDto } from 'src/app/portfolio/models/PortfolioListItemDto';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  data: PortfolioListItemDto[] = [];
  isloading = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.isloading = true;
    this.portfolioService.getPortfolios().subscribe(x => {
      this.isloading = false;
      this.data = x;
    });
  }



}
