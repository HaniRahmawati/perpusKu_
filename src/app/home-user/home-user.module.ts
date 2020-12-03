import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUserPageRoutingModule } from './home-user-routing.module';

import { HomeUserPage } from './home-user.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-user',
    component: HomeUserPage,
    children: [
      {
        path: 'home-user',
        children: [
          {
            path: 'home-user',
            loadChildren: '../home-user/home-user.module'
          }
        ]
      },
      {
        path: 'home-user',
        redirectTo: '/app/home-user',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUserPageRoutingModule
  ],
  declarations: [HomeUserPage]
})
export class HomeUserPageModule {}
