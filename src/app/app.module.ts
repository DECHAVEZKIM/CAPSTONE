import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from '../store/AppStoreModule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './user-data-service.service';
import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...AppStoreModule,
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

IonicModule.forRoot({
  mode: 'ios',
  scrollAssist: false,
  scrollPadding: false
});
