import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { IonicModule } from '@ionic/angular';
import { AddDonationsComponent } from './add-donations/add-donations.component';
import { MatExpansionModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTableModule } from '@angular/material';
import { DonorListComponent } from './donor-list/donor-list.component';
import { FormsModule } from '@angular/forms';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';

@NgModule({
  declarations: [HomeMenuComponent, AddDonationsComponent, DonorListComponent, AddExpensesComponent, ExpensesListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    FormsModule
  ]
})
export class HomeModule { }
