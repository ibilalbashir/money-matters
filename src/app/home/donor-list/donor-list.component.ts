import { DonorsService } from './../../../shared/donors.service';
import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  amount: number;

}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'صالح', amount: 1500 },
//   { name: 'ھشام', amount: 1500 },
//   { name: 'فاصل', amount: 1500 },
//   { name: 'رئیس', amount: 1500 },
//   { name: 'حسنین', amount: 1500 },
//   { name: 'زیدان', amount: 1500 },
//   { name: 'شیر', amount: 1500 },
//   { name: 'شمس', amount: 1500 }

// ];
@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.scss'],
})
export class DonorListComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'name'];
  dataSource;

  constructor(private donorsService: DonorsService) { }

  ngOnInit() {
    this.donorsService.getDonors().subscribe(res => {
      console.log('donors for datatable', res);
      this.dataSource = res;
    }, err => {
      console.log(err)
    })

  }


}
