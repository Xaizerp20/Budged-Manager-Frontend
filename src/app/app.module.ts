import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//Modules
import { HttpClientModule } from '@angular/common/http';


//Components
import { AppComponent } from './app.component';
import { AddEditExpenseComponent } from './components/add-edit-expense/add-edit-expense.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { ShowExpenseComponent } from './components/show-expense/show-expense.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    AddEditExpenseComponent,
    ListExpensesComponent,
    ShowExpenseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
