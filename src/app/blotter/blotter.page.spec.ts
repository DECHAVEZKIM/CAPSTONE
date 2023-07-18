import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlotterPage } from './blotter.page';

describe('BlotterPage', () => {
  let component: BlotterPage;
  let fixture: ComponentFixture<BlotterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlotterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
