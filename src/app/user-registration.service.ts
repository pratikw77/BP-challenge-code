import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user:any){
    return this.http.post("http://localhost:8080/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/getAllUsers");
  }

  public getUserByEmail(email:string){
    return this.http.get("http://localhost:8080/findUser/"+email);
  }

  public deleteUser(id:number){
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }

  calculatePassengers(input: string): Observable<any> {
    return this.http.post<any>("http://localhost:8080/passengers/", { input });
  }

  getPreviousCalculations(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/passengers/");
  }
}
