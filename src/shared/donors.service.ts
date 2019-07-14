import { Observable, of } from 'rxjs';




export interface PeriodicElement {
  name: string;
  amount: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'صالح', amount: 1500 }

];



export class DonorsService {



  constructor() { }

  addDonorFn(obj) {
    let newObj = {
      name: obj.name,
      amount: obj.amount
    }
    ELEMENT_DATA.push(newObj);
    console.log('after adding new one ', ELEMENT_DATA)
  }

  getDonors() {
    return of(ELEMENT_DATA);
  }

}
