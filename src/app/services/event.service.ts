import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private upcomingEvents: any[] = [];
  private pastEvents: any[] = [];
  private myEvents: any[] = [];

  constructor() { }

  // Methods to add, get, and delete events
  // You can implement methods to interact with the events array here
}