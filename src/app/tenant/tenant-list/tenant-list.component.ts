import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tenant_DetailDto } from 'src/app/tenant/models/tenantDetailDto';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Tenant_DetailDto>();

  @ViewChild(MatSort) sort: MatSort;
  @Input() set tenantList(value: Tenant_DetailDto[]) {
    if (value) {
      this.dataSource = new MatTableDataSource<Tenant_DetailDto>(value);
      this.dataSource.sort = this.sort;
    }
  }

  displayedColumns: string[] = ['id', 'createdDateTime', 'updatedDateTime', 'isActive',
    'title', 'firstName', 'lastName', 'contactNumber', 'emailAddress', 'tenancyStartDate',
    'tenancyEndDate', 'profession'];

  constructor() {}

  ngAfterViewInit(): void {}

}
