import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
    
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'view-events',
        loadChildren: () => import('src/app/view-events/view-events.module').then( m => m.ViewEventsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/view-events',
        pathMatch: 'full'
      },
      {
        path: 'certificate-request',
        loadChildren: () => import('src/app/certificate-request/certificate-request.module').then( m => m.CertificateRequestPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/certificate-request',
        pathMatch: 'full'
      },
      {
        path: 'barangay-certificates',
        loadChildren: () => import('src/app/barangay-certificates/barangay-certificates.module').then( m => m.BarangayCertificatesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/barangay-certificates',
        pathMatch: 'full'
      },
      {
        path: 'blotter',
        loadChildren: () => import('src/app/blotter/blotter.module').then( m => m.BlotterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/blotter',
        pathMatch: 'full'
      },
      {
        path: 'account',
        loadChildren: () => import('src/app/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/account',
        pathMatch: 'full'
      },
        ]
      },
    ]
    
    
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
