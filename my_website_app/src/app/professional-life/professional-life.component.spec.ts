import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLifeComponent } from './professional-life.component';

describe('ProfessionalLifeComponent', () => {
  let component: ProfessionalLifeComponent;
  let fixture: ComponentFixture<ProfessionalLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalLifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
