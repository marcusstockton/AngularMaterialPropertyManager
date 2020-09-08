import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListItemComponent } from './property-list-item/property-list-item.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PropertyDashboardComponent },
  { path: 'create', component: PropertyFormComponent },
  { path: ':id', component: PropertyDetailComponent },
  { path: ':id/edit', component: PropertyFormComponent }
];


@NgModule({
  declarations: [
    PropertyDashboardComponent,
    PropertyDetailComponent,
    PropertyListItemComponent,
    PropertyFormComponent],
  imports: [
    CommonModule,
    //RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    PropertyDashboardComponent
  ]
})
export class PropertyModule { }
