import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlotterPageRoutingModule } from './blotter-routing.module';

import { BlotterPage } from './blotter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlotterPageRoutingModule
  ],
  declarations: [BlotterPage]
})
export class BlotterPageModule {}
