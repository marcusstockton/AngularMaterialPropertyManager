import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PortfolioListItemDto } from '../models/PortfolioListItemDto';
import { PortfolioDetailDto } from '../models/portfolioDetailDto';
import { PortfolioCreateDto } from '../models/portfolioCreate';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  public getPortfolios(): Observable<PortfolioListItemDto[]> {
    const URI = environment.baseUrl + '/Portfolios';
    return this.http.get(URI).pipe(
      map((data: PortfolioListItemDto[]) => {
        return data;
      })
    );
  }

  public getPortfolioById(portfolioId: string): Observable<PortfolioDetailDto>{
    const URI = environment.baseUrl + '/Portfolios/GetPortfolioAndProperties/' + portfolioId;
    return this.http.get(URI).pipe(
      map((data: PortfolioDetailDto) => {
        return data;
      })
    );
  }

  public updatePortfolio(portfolioId: string, data: PortfolioDetailDto): Observable<any>{
    const URI = environment.baseUrl + `/Portfolios/${portfolioId}`;
    return this.http.put(URI, data);
  }

  public createPortfolio(data: PortfolioCreateDto): Observable<any>{
    const URI = environment.baseUrl + '/Portfolios/';
    return this.http.post(URI, data);
  }
}
