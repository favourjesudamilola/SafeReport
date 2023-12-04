import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeFormHeaderComponent } from './crime-form-header.component';

describe('CrimeFormHeaderComponent', () => {
  let component: CrimeFormHeaderComponent;
  let fixture: ComponentFixture<CrimeFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeFormHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
