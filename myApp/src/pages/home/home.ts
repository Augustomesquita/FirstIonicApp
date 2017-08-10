import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '* NOVA AMIZADE *',
      subTitle: 'Sua amiga, Aloy, acabou de aceitar sua solicitação de amizade!',
      buttons: ['OK']
    });
    alert.present();
  }

}
