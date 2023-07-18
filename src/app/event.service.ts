// event.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventData } from './event-data';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsSubject = new BehaviorSubject<EventData[]>(this.loadEvents());
  public events$ = this.eventsSubject.asObservable();

  constructor() { }

  getEvents() {
    return this.eventsSubject.getValue();
  }

  addEvent(newEvent: EventData) {
    const events = this.eventsSubject.getValue();
    events.push(newEvent);
    this.eventsSubject.next(events);
    this.saveEvents(events);
  }

  updateEvent(index: number, updatedEvent: EventData) {
    const events = this.eventsSubject.getValue();
    events[index] = updatedEvent;
    this.eventsSubject.next(events);
    this.saveEvents(events);
  }

  deleteEvent(index: number) {
    const events = this.eventsSubject.getValue();
    events.splice(index, 1);
    this.eventsSubject.next(events);
    this.saveEvents(events);
  }

  private loadEvents(): EventData[] {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  }

  private saveEvents(events: EventData[]) {
    localStorage.setItem('events', JSON.stringify(events));
  }
}
