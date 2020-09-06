import { Component, OnInit, Input } from '@angular/core';
import { PortfolioListItemDto } from 'src/app/models/PortfolioListItemDto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-list-item',
  templateUrl: './portfolio-list-item.component.html',
  styleUrls: ['./portfolio-list-item.component.scss']
})
export class PortfolioListItemComponent implements OnInit {

  @Input() portfolio: PortfolioListItemDto;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToPortfolio(): void{
    // this.router.navigateByUrl(`/${this.portfolio.id}`, { relativeTo: this.route });
    this.router.navigate([`./${this.portfolio.id}`], { relativeTo: this.route });
  }
}
