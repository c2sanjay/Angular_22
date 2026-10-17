import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan.model';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl ='https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.apiUrl);
  }
}