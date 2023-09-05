import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from 'src/app/Interface/expense';
import { ExpenseDTO } from 'src/app/Interface/expenseDTO';

@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.css']
})
export class AddEditExpenseComponent {

  loading: boolean;
  form:FormGroup


  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      Description:["", Validators.required],
      Amount:["", Validators.required],
      Date:["", Validators.required],
      User:["", Validators.required],
      Category:["", Validators.required],
    })
    this.loading = false;
  }
  


  addExpense()
  {
    const expense: ExpenseDTO = {
      expenseDescription: this.form.value.Description,
      amount: this.form.value.Amount,
      expenseDate: this.form.value.Date.toString(),
      categoryName: this.form.value.Category,
      userName: this.form.value.User
    
    }
    console.log(expense);
  }

}
