import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio/portfolio.service';
import { PortfolioListItemDto } from 'src/app/portfolio/models/PortfolioListItemDto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  data: PortfolioListItemDto[] = [];
  isloading = false;
  displayedColumns: string[] = ['name', 'createdDateTime', 'propertyCount'];
  constructor(private portfolioService: PortfolioService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.isloading = true;
    this.portfolioService.getPortfolios().subscribe(x => {
      this.isloading = false;
      this.data = x;
    });
  }
  viewPortfolio(row: PortfolioListItemDto): void {
    console.log(row);
    this.router.navigate(['/portfolio', row.id]);
  }


}
