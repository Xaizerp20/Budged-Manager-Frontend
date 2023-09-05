import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Expense } from 'src/app/Interface/expense';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ExpenseService } from 'src/app/service/expense.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';


const listExpenses: Expense[] = [
  { expenseId: 1, expenseDescription: "juice", amount: 10, categoryName: "eat/drinks", expenseDate: new Date().toLocaleString(), userName: "xavier" },
  
  { expenseId: 2, expenseDescription: "Gasoline", amount: 50, categoryName: "Transportation", expenseDate: new Date().toLocaleString(), userName: "Maria" },

  { expenseId: 3, expenseDescription: "Movie tickets", amount: 25, categoryName: "Entertainment", expenseDate: new Date().toLocaleString(), userName: "Carlos" },
  
  { expenseId: 4, expenseDescription: "Groceries", amount: 75, categoryName: "Groceries", expenseDate: new Date().toLocaleString(), userName: "Elena" },
  
  { expenseId: 5, expenseDescription: "Phone bill", amount: 60, categoryName: "Utilities", expenseDate: new Date().toLocaleString(), userName: "Luis" },
  
  { expenseId: 6, expenseDescription: "Dinner", amount: 30, categoryName: "Eat/Drinks", expenseDate: new Date().toLocaleString(), userName: "Isabella" },
];



@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})

export class ListExpensesComponent implements OnInit , AfterViewInit {
  displayedColumns: string[] = ['Id', 'Description', 'Amount', 'Date', 'User', 'Category', 'Actions'];
  dataSource = new MatTableDataSource<Expense>(listExpenses);
  loading:boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
  constructor(private _expenseService: ExpenseService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses()
  {
    this._expenseService.getExpenses().subscribe(data => {
      console.log(data);
     // this.dataSource = data;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteExpense(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open(' Expense Registered Sucessfull', '', 
      {
        duration: 4000,
        horizontalPosition: 'right'
      }
    );
    }, 1000);
    
   
  }

}
