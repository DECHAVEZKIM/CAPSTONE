import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventData } from '../event-data';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.page.html',
  styleUrls: ['./admin-panel.page.scss'],
})
export class AdminPanelPage {
  events: EventData[] = [];
  newEvent: EventData = {
    name: '',
    time: '',
    location: '',
    date: '',
  };
  editIndex: number | null = null;

  constructor(private router: Router, private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

  addEvent() {
    if (this.newEvent.name && this.newEvent.time && this.newEvent.location && this.newEvent.date) {
      this.eventService.addEvent({ ...this.newEvent });
      this.resetNewEvent();
    }
  }

  updateEvent() {
    if (
      this.editIndex !== null &&
      this.events[this.editIndex] &&
      this.events[this.editIndex].name &&
      this.events[this.editIndex].time &&
      this.events[this.editIndex].location &&
      this.events[this.editIndex].date
    ) {
      this.eventService.updateEvent(this.editIndex, this.events[this.editIndex]);
      this.resetEditIndex();
    }
  }

  deleteEvent(index: number) {
    if (index !== null && index >= 0 && index < this.events.length) {
      this.eventService.deleteEvent(index);
    }
  }

  setEditIndex(index: number) {
    this.editIndex = index;
  }

  resetNewEvent() {
    this.newEvent = {
      name: '',
      time: '',
      location: '',
      date: '',
    };
  }

  resetEditIndex() {
    this.editIndex = null;
  }

  private navigateToViewEvents() {
    this.router.navigate(['/view-events'], {
      queryParams: { events: JSON.stringify(this.events) },
    });
  }
}
