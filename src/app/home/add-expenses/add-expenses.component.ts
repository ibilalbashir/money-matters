import { ExpensesService } from './../../../shared/expenses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss'],
})
export class AddExpensesComponent implements OnInit {

  constructor(private service: ExpensesService) { }

  expensesForm = {
    reason: '',
    amount: '',
    name: '',
    date: '',
    designation: ''
  }

  ngOnInit() { }

  expensesSubmit() {
    console.log(this.expensesForm)
    this.service.addExpenses(this.expensesForm);
  }

}
