import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarangayCertificatesPageRoutingModule } from './barangay-certificates-routing.module';

import { BarangayCertificatesPage } from './barangay-certificates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarangayCertificatesPageRoutingModule
  ],
  declarations: [BarangayCertificatesPage]
})
export class BarangayCertificatesPageModule {}
