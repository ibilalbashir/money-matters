import { DonorsService, PeriodicElement } from './../../../shared/donors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-donations',
  templateUrl: './add-donations.component.html',
  styleUrls: ['./add-donations.component.scss'],
})
export class AddDonationsComponent implements OnInit {

  panelOpenState = false;

  newDonorForm = {
    name: '',
    number: '',
    idCard: '',
    reason: '',
    amount: 's'
  };

  oldDonorsForm = {
    name: '',
    reason: '',
    amount: ''
  }


  oldDonors;

  constructor(private donorsService: DonorsService) { }

  ngOnInit() {

    this.donorsService.getDonors().subscribe(res => {
      this.oldDonors = res;
      console.log('donors are', res)
    }, err => {
      console.log(err)
    });

  }

  addNewDonationFn() {
    console.log('new donor', this.newDonorForm);
    this.donorsService.addDonorFn(this.newDonorForm);
  }

  oldDonorsSubmit() {
    console.log('new donor', this.oldDonorsForm);
    this.donorsService.addDonorFn(this.oldDonorsForm);
  }



}
