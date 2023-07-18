import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.page.html',
  styleUrls: ['./swipe.page.scss'],
})
export class SwipePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    '/assets/img/waving.png',
  ]
  images2 = [
    '/assets/img/Easy.png',
  ]
  images3 = [
    '/assets/img/Citizen.png',
  ]
  desc = ["Discover features that would provide support as a resident of Poblacion San Pascual Barangay",
  ]
  desc2 = ["Friendly User Interface and easy to use application simple visualization proper for the eyes"]
  desc3 = ["Be part of the users access the barangay's application by registering"]
  constructor() { }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  } 
  ngOnInit() {
  }

}
