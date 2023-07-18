import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificateRequestPageRoutingModule } from './certificate-request-routing.module';

import { CertificateRequestPage } from './certificate-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificateRequestPageRoutingModule
  ],
  declarations: [CertificateRequestPage]
})
export class CertificateRequestPageModule {}
