import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddEditExpenseComponent } from './components/add-edit-expense/add-edit-expense.component';
import { ShowExpenseComponent } from './components/show-expense/show-expense.component';

const routes: Routes = [
  {path: '', redirectTo: 'listExpenses', pathMatch: 'full' },
  {path: 'listExpenses', component: ListExpensesComponent},
  {path: 'addExpense', component: AddEditExpenseComponent},
  {path: 'showExpense/:id', component: ShowExpenseComponent},
  {path: 'editExpense/:id', component: AddEditExpenseComponent},
  {path: '**', redirectTo: 'listExpenses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
