import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {

  portfolioId: string;
  propertyId: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params) {
        this.portfolioId = params.portfolioid;
        this.propertyId = params.propertyid;
      }
    });
  }

  ngOnInit(): void {
  }

}
