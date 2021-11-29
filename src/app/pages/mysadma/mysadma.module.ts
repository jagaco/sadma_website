import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysadmaPageRoutingModule } from './mysadma-routing.module';

import { MysadmaPage } from './mysadma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysadmaPageRoutingModule
  ],
  declarations: [MysadmaPage]
})
export class MysadmaPageModule {}
