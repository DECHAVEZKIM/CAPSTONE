import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarangayCertificatesPage } from './barangay-certificates.page';

describe('BarangayCertificatesPage', () => {
  let component: BarangayCertificatesPage;
  let fixture: ComponentFixture<BarangayCertificatesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BarangayCertificatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
