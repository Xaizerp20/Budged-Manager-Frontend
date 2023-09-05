import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../Interface/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private AppUrl:string = "http://localhost:5230/"
  private ApiUrl:string = "api/ExpensesRegister"


  constructor(private http: HttpClient) { }


  getExpenses():Observable<Expense[]>{
    return this.http.get<Expense[]>(`${this.AppUrl}${this.ApiUrl}`)
  }

}
