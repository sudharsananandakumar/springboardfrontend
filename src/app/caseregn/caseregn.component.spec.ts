import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseregnComponent } from './caseregn.component';

describe('CaseregnComponent', () => {
  let component: CaseregnComponent;
  let fixture: ComponentFixture<CaseregnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseregnComponent]
    });
    fixture = TestBed.createComponent(CaseregnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
