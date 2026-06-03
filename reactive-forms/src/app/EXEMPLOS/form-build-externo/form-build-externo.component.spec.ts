import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildExternoComponent } from './form-build-externo.component';

describe('FormBuildExternoComponent', () => {
  let component: FormBuildExternoComponent;
  let fixture: ComponentFixture<FormBuildExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBuildExternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBuildExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
