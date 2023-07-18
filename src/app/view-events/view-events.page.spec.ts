import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ViewEventsPage } from './view-events.page';

describe('ViewEventsPage', () => {
  let component: ViewEventsPage;
  let fixture: ComponentFixture<ViewEventsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
