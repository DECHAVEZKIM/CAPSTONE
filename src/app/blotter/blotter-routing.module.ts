import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlotterPage } from './blotter.page';

const routes: Routes = [
  {
    path: '',
    component: BlotterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlotterPageRoutingModule {}
