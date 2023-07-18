import { Component, OnInit } from '@angular/core';
import { EventData } from '../event-data';
import { EventService } from '../event.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.page.html',
  styleUrls: ['./view-events.page.scss'],
})
export class ViewEventsPage implements OnInit {
  events: EventData[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.events$.subscribe((events) => {
      this.events = events;
    });
    this.events = this.eventService.getEvents();
  }
}
