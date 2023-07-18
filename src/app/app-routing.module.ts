import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'swipe',
    loadChildren: () => import('./onboarding/swipe/swipe.module').then( m => m.SwipePageModule)
  },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterPage },
  { path: 'admin', component: AdminComponent, data: { userData: null } }, 
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin-panel/admin-panel.module').then( m => m.AdminPanelPageModule)
  },
  {
    path: 'view-events',
    loadChildren: () => import('./view-events/view-events.module').then( m => m.ViewEventsPageModule)
  },
  { path: '', redirectTo: 'admin-panel', pathMatch: 'full' },
  { path: 'admin-panel', loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelPageModule) },
  { path: 'view-events', loadChildren: () => import('./view-events/view-events.module').then(m => m.ViewEventsPageModule) },
  {
    path: 'certificate-request',
    loadChildren: () => import('./certificate-request/certificate-request.module').then( m => m.CertificateRequestPageModule)
  },
  {
    path: 'barangay-certificates',
    loadChildren: () => import('./barangay-certificates/barangay-certificates.module').then( m => m.BarangayCertificatesPageModule)
  },
  {
    path: 'blotter',
    loadChildren: () => import('./blotter/blotter.module').then( m => m.BlotterPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  
];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
