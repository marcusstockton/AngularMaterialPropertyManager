import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PortfolioDetailDto } from '../models/portfolioDetailDto';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  public getPortfolios(): Observable<PortfolioDetailDto[]> {
    const URI = environment.baseUrl + '/Portfolios';
    return this.http.get(URI).pipe(
      map((data: PortfolioDetailDto[]) => {
        return data;
      })
    );
  }
}
