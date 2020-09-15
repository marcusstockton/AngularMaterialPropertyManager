import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PropertyDetailDto } from '../models/PropertyDetailDto';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-property-dashboard',
  templateUrl: './property-dashboard.component.html',
  styleUrls: ['./property-dashboard.component.scss']
})
export class PropertyDashboardComponent implements AfterViewInit {

  @Input() properties: PropertyDetailDto[];
  @ViewChild(MatSort) sort: MatSort;
  private portfolioId: string;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'noOfBeds', 'propertyValue', 'rentalPrice', 'description', 'noTenants'];

  constructor(private router: Router, route: ActivatedRoute) {
    this.portfolioId = route.snapshot.params.portfolioid;
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.properties);
    this.dataSource.sort = this.sort;
  }

  getProperty(property: PropertyDetailDto): void{
    this.router.navigate([`/portfolio/${this.portfolioId}/properties/${property.id}`]);
  }
}
