import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {PortfolioDetailDto} from '../../models/portfolioDetailDto';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  data: PortfolioDetailDto[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPortfolios();
  }


  getPortfolios() {
    // Move this into a service
    const URI = environment.baseUrl + '/Portfolios'
    this.http.get(URI).subscribe((res: PortfolioDetailDto[]) => {
      this.data = res;
    }, (err) => {
      alert(err);
    });

  }
}
