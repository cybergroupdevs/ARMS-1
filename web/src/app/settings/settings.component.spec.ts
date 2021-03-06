import { IdProofTypeComponent } from './components/id-proof-type/id-proof-type.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { EligibilityCriteriaComponent } from './components/eligibility-criteria/eligibility-criteria.component';
import { EmploymentTypeComponent } from './components/employment-type/employment-type.component';
import { RoundTypeComponent } from './components/round-type/round-type.component';
import { LocationComponent } from './components/location/location.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent, ApplicationStatusComponent, EligibilityCriteriaComponent, EmploymentTypeComponent, LocationComponent, RoundTypeComponent, IdProofTypeComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule]
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
