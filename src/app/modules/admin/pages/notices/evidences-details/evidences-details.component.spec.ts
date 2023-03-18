import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencesDetailsComponent } from './evidences-details.component';

describe('EvidencesDetailsComponent', () => {
  let component: EvidencesDetailsComponent;
  let fixture: ComponentFixture<EvidencesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidencesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidencesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
