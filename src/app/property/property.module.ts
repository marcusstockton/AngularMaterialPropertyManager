import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListItemComponent } from './property-list-item/property-list-item.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { TenantModule } from '../tenant/tenant.module';
import { TenantListComponent } from '../tenant/tenant-list/tenant-list.component';

const routes: Routes = [
  { path: 'properties', children: [
    { path: '', component: PropertyDashboardComponent },
    { path: 'create', component: PropertyFormComponent },
    { path: ':propertyid', component: PropertyDetailComponent },
    { path: ':propertyid/edit', component: PropertyFormComponent }
  ]},
];


@NgModule({
  declarations: [
    PropertyDashboardComponent,
    PropertyDetailComponent,
    PropertyListItemComponent,
    PropertyFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TenantModule,
    MaterialModule
  ],
  exports: [
    PropertyDashboardComponent,
    RouterModule
  ]
})
export class PropertyModule { }
