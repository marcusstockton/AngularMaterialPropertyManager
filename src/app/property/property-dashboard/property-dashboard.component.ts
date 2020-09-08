import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PropertyDetailDto } from '../models/PropertyDetailDto';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-property-dashboard',
  templateUrl: './property-dashboard.component.html',
  styleUrls: ['./property-dashboard.component.scss']
})
export class PropertyDashboardComponent implements AfterViewInit {

  @Input() properties: PropertyDetailDto[];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'noOfBeds', 'propertyValue', 'rentalPrice', 'description', 'noTenants'];

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.properties);
    this.dataSource.sort = this.sort;
  }
  getProperty(property: PropertyDetailDto){
    alert("PropertyId clicked: " + property.id);
  }
}
