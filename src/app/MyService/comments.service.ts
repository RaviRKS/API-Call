import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiUrl = 'https://portal-uat.42-q.com/mes-api/sfdc_gbs/units/INFINIX018/comments'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Method to fetch comments based on the provided ID
  getComment(id: string): Observable<any> {
    // Using HttpParams to add the parameter to the URL
    const params = new HttpParams().set('id', id);

    // Making the GET request with the parameter
    return this.http.get<any>(this.apiUrl, { params });
  }
}
