import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyDetailDto } from '../models/propertyDetailDto';
import { PropertyService } from './../property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  portfolioId: string;
  propertyId: string;
  propertyDetails: PropertyDetailDto;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) {
    this.route.params.subscribe(params => {
      this.portfolioId = params.portfolioid;
      this.propertyId = params.propertyid;

      this.propertyService.getPropertyDetails(this.propertyId).subscribe((result: PropertyDetailDto) =>{
        this.propertyDetails = result;
      });
    });
   }

  ngOnInit(): void {
  }

}
