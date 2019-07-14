import { DonationService } from './../shared/donation.service';
import { DonorsService } from './../shared/donors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesService } from 'src/shared/expenses.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
    [BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      ReactiveFormsModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DonorsService,
    DonationService,
    ExpensesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
