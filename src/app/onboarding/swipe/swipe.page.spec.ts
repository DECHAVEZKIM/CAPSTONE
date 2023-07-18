import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SwipePage } from './swipe.page';

describe('SwipePage', () => {
  let component: SwipePage;
  let fixture: ComponentFixture<SwipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SwipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
