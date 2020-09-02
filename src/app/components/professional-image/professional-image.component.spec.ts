import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalImageComponent } from './professional-image.component';

describe('ProfessionalImageComponent', () => {
  let component: ProfessionalImageComponent;
  let fixture: ComponentFixture<ProfessionalImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
