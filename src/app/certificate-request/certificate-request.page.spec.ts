import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CertificateRequestPage } from './certificate-request.page';

describe('CertificateRequestPage', () => {
  let component: CertificateRequestPage;
  let fixture: ComponentFixture<CertificateRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CertificateRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
