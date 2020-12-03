import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {

  constructor(
    public router: Router,
    public modalController : ModalController
  ) 
  {}

  ngOnInit() {
  }

  async login() {
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
