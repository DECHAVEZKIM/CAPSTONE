import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarangayCertificatesPage } from './barangay-certificates.page';

const routes: Routes = [
  {
    path: '',
    component: BarangayCertificatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangayCertificatesPageRoutingModule {}
