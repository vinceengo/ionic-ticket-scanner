import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScannerPage } from '../scanner/scanner';

/*
  Generated class for the Accueil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {

  private isOriginScanner: boolean = false;
  private isTicketValid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // check if the page that called AccueilPage is ScannerPage
    if (this.navParams.get('origin') instanceof ScannerPage) {
      this.isOriginScanner = true;
    } 
    
    this.isTicketValid = this.navParams.get('isTicketValid');
    
  }

  // navigation for prototype (go to Scanner)
  goToScanner() {
    this.navCtrl.setRoot(ScannerPage);
  }

}
