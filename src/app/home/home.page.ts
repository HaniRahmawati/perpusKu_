import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HomeUserPage } from '../home-user/home-user.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router: Router,
    public modalController: ModalController
  ) 
  {}

  async homeuser() {
    const modal = await this.modalController.create({
      component: HomeUserPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}


