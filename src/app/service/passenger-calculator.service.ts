import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerCalculatorService {

  constructor(private http:HttpClient) { }

  calculatePassengers(input: string): Observable<any> {
    return this.http.post<any>("http://localhost:8080/passengers/", { input });
  }

  getPreviousCalculations(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/passengers/");
  }
}
