import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { PortfolioDetailDto } from 'src/app/portfolio/models/portfolioDetailDto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  portfolioId: string;
  portfolio: PortfolioDetailDto;
  isloading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private portfolioService: PortfolioService,
    private _snackBar: MatSnackBar
  ) {
    this.portfolioId = this.activatedRoute.snapshot.params.portfolioid;

    this.isloading = true;
    this.portfolioService.getPortfolioById(this.portfolioId).subscribe(res => {
      this.isloading = false;
      this.portfolio = res;
    }, (err) => {
      this._snackBar.open(err.message, null, {duration: 3000});
    });
  }

  ngOnInit(): void {
  }

}
