import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PortfolioDashboardComponent } from './portfolio/portfolio-dashboard/portfolio-dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';
import { PortfolioFormComponent } from './portfolio/portfolio-form/portfolio-form.component';

const routes: Routes = [
  {
  path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }, {
    path: 'portfolio',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PortfolioDashboardComponent },
      { path: 'create', component: PortfolioFormComponent },
      { path: ':id', component: PortfolioDetailComponent },
      { path: ':id/edit', component: PortfolioFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
