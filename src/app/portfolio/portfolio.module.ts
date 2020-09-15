import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListItemComponent } from './portfolio-list-item/portfolio-list-item.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { PortfolioDashboardComponent } from './portfolio-dashboard/portfolio-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import {PropertyModule} from '../property/property.module';

const routes: Routes = [
  { path: '', component: PortfolioDashboardComponent },
  { path: 'create', component: PortfolioFormComponent },
  // { path: 'view/:portfolioid/properties', pathMatch:"full", loadChildren: () => import('../property/property.module').then(x => x.PropertyModule), runGuardsAndResolvers: 'always'}, 
  { path: 'view/:portfolioid', component: PortfolioDetailComponent },
  { path: 'edit/:portfolioid',  component: PortfolioFormComponent },
  
];

@NgModule({
  declarations: [
    PortfolioDashboardComponent,
    PortfolioListItemComponent,
    PortfolioDetailComponent,
    PortfolioFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    PropertyModule
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioModule { }
