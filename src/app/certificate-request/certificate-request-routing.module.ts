import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateRequestPage } from './certificate-request.page';

const routes: Routes = [
  {
    path: '',
    component: CertificateRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateRequestPageRoutingModule {}
