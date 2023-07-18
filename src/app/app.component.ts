import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
export class MyApp {
  //Since you are using lazy loading you have to use type of string for the rootPage
  rootPage:any = "login";
}