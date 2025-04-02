import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurolatorLogoComponent } from './purolator-logo.component';

describe('PurolatorLogoComponent', () => {
  let component: PurolatorLogoComponent;
  let fixture: ComponentFixture<PurolatorLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurolatorLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurolatorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
