import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PortfolioDetailDto } from 'src/app/portfolio/models/portfolioDetailDto';
import { PortfolioService } from '../portfolio.service';
import { PortfolioCreateDto } from 'src/app/portfolio/models/portfolioCreate';
import {Location} from '@angular/common';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {
  portfolioForm: FormGroup;
  portfolioId: string;
  portfolio: PortfolioDetailDto;

  constructor(private activatedRoute: ActivatedRoute, private portfolioService: PortfolioService, private _location: Location) {
    this.portfolioForm = new FormGroup({
      name: new FormControl(''),
    });

    this.portfolioId = this.activatedRoute.snapshot.params.portfolioid;
    // We have an id? Go get the data, this is an update.

    if (this.portfolioId !== '') {
      this.portfolioService.getPortfolioById(this.portfolioId).subscribe((res: PortfolioDetailDto) => {
        this.portfolio = res;
        this.portfolioForm.patchValue({ name: this.portfolio.name });
      });
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.portfolioId !== '') {
      this.portfolio.name = this.portfolioForm.get('name').value;
      this.portfolioService.updatePortfolio(this.portfolioId, this.portfolio).subscribe(res => {
        alert("Updated");
      }, (err) => {

      });
    } else {
      const data = new PortfolioCreateDto();
      data.name = this.portfolioForm.get('name').value;
      this.portfolioService.createPortfolio(data).subscribe(res => {
        alert("Created");
      }, (err) => {

      });
    }

    // TODO: Use EventEmitter with form value
    console.warn(this.portfolioForm.value);
  }

  backClicked() {
    this._location.back();
  }
}
