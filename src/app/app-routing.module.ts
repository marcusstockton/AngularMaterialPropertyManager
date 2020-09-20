import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const portfolioModule = () => import('./portfolio/portfolio.module').then(x => x.PortfolioModule);
const propertyModule = () => import('./property/property.module').then(x => x.PropertyModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'portfolios',
    loadChildren: portfolioModule,
  },
  {
    path: 'portfolio/:portfolioid',
    canActivate: [AuthGuard],
    loadChildren: propertyModule,
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
