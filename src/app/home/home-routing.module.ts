import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { AddDonationsComponent } from './add-donations/add-donations.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorListComponent } from './donor-list/donor-list.component';

const routes: Routes = [
  { path: '', component: HomeMenuComponent },
  { path: 'add-donations', component: AddDonationsComponent },
  { path: 'donor-list', component: DonorListComponent },
  { path: 'add-expenses', component: AddExpensesComponent },
  { path: 'expenses-list', component: ExpensesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
