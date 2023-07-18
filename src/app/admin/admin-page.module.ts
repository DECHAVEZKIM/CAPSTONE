import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    IonicModule // Make sure IonicModule is imported here
  ],
  declarations: [AdminComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add the CUSTOM_ELEMENTS_SCHEMA here
})
export class AdminPageModule { }