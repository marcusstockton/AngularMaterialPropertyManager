import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'tenant', children: [
    { path: '', component: TenantListComponent, canActivate: [AuthGuard] }
    // { path: 'create', component: PortfolioFormComponent, canActivate: [AuthGuard] },
    // { path: ':portfolioid', component: PortfolioDetailComponent, canActivate: [AuthGuard] },
    // { path: ':portfolioid/edit',  component: PortfolioFormComponent, canActivate: [AuthGuard] },
  ]},
];

@NgModule({
  declarations: [TenantListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    RouterModule,
    TenantListComponent
  ]
})
export class TenantModule { }
