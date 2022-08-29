import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDocumentComponent } from './resume-document.component';

describe('ResumeDocumentComponent', () => {
  let component: ResumeDocumentComponent;
  let fixture: ComponentFixture<ResumeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
