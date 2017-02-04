import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';

/*
  Generated class for the Authentification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-authentification',
  templateUrl: 'authentification.html'
})
export class AuthentificationPage {

private error: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.presentLoading();
  }

  createLoader(content) {
    return this.loadingCtrl.create({
      'content': content
    });
  }

  loadNetwork() {
    return new Promise((resolve: any, reject: any) => {
      let loader = this.createLoader("En attente du réseau GTI525...");
      loader.present();

      setTimeout(() => {
        loader.dismiss();
        resolve();
      }, 1000);
    });
  }

  loadServer() {
    return new Promise((resolve: any, reject: any) => {
      let loader = this.createLoader("En attente du serveur...");
      loader.present();

      setTimeout(() => {
        loader.dismiss();
        resolve();
      }, 1000);
    });
  }

  presentLoading() {
    // loading sequence
    // load network first
    this.loadNetwork()
    .then(() => {
      // then load server
      return this.loadServer();
    })
    .catch((msg) => {
      this.error = msg;
    });
  }

  // navigation for prototype (go to Accueil)
  goToAccueil() {
    this.navCtrl.setRoot(AccueilPage);
  }

}