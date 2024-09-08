import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'https://api.chucknorris.io/jokes/random?'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Method to fetch data using provided parameters
  getDepartmentData(param1: string, param2: string): Observable<any> {
    // Set up query parameters
    const params = new HttpParams()
      .set('category', param1)
      .set('param2', param2);

    // Make GET request with parameters
    return this.http.get<any>(this.apiUrl, { params });
  }
}
