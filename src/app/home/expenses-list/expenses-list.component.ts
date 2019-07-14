import { ExpensesService } from './../../../shared/expenses.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss'],
})
export class ExpensesListComponent implements OnInit {
  displayedColumns: string[] = ['reason', 'amount', 'name', 'date'];
  dataSource;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.expensesService.getExpenses().subscribe(res => {
      console.log('expenses are', res);
      this.dataSource = res;
    }, err => {
      console.log(err);
    })
  }

}
