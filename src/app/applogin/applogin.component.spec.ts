import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApploginComponent } from './applogin.component';

describe('ApploginComponent', () => {
  let component: ApploginComponent;
  let fixture: ComponentFixture<ApploginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApploginComponent]
    });
    fixture = TestBed.createComponent(ApploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
