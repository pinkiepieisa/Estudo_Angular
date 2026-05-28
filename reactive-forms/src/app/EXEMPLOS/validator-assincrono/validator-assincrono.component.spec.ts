import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorAssincronoComponent } from './validator-assincrono.component';

describe('ValidatorAssincronoComponent', () => {
  let component: ValidatorAssincronoComponent;
  let fixture: ComponentFixture<ValidatorAssincronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatorAssincronoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatorAssincronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
