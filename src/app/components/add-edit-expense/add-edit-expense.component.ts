import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.css']
})
export class AddEditExpenseComponent {

  loading: boolean;


  constructor(){
    this.loading = false;
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
