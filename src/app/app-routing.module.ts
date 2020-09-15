import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';

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
    loadChildren: () => import('./portfolio/portfolio.module').then(x => x.PortfolioModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'portfolio/view/:portfolioid/properties',
    loadChildren: () => import('./property/property.module').then(x => x.PropertyModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
