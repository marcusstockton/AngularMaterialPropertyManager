import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { PortfolioDashboardComponent } from './portfolio-dashboard/portfolio-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PropertyModule } from '../property/property.module';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'portfolio', children: [
    { path: '', component: PortfolioDashboardComponent, canActivate: [AuthGuard] },
    { path: 'create', component: PortfolioFormComponent, canActivate: [AuthGuard] },
    { path: ':portfolioid', component: PortfolioDetailComponent, canActivate: [AuthGuard] },
    { path: ':portfolioid/edit',  component: PortfolioFormComponent, canActivate: [AuthGuard] },
  ]},
];

@NgModule({
  declarations: [
    PortfolioDashboardComponent,
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
