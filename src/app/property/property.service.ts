import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PropertyDetailDto } from './models/propertyDetailDto';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  public getPropertyDetails(propertyId: string){
    const URI = `${environment.baseUrl}/Properties/GetPropertyDetails/${propertyId}`;
    return this.http.get(URI).pipe(
      map((data: PropertyDetailDto) => {
        return data;
      })
    );
  }
}
