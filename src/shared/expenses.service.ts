import { Injectable } from '@angular/core';
import { of } from 'rxjs';



export interface PeriodicElement {
  date: string;
  name: string;
  amount: number;
  reason: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: '13-3-2018', name: 'صالح', amount: 1500, reason: 'سپیکر مرمت' }

];

export class ExpensesService {

  constructor() { }
  newObj;
  addExpenses(obj) {
    this.newObj = {
      name: obj.name,
      date: obj.date,
      amount: obj.amount,
      reason: obj.reason

    }
    ELEMENT_DATA.push(this.newObj);
    console.log('after addition ', ELEMENT_DATA);
  }
  getExpenses() {
    return of(ELEMENT_DATA);
  }
}
