import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgdahboardComponent } from './navgdahboard.component';

describe('NavgdahboardComponent', () => {
  let component: NavgdahboardComponent;
  let fixture: ComponentFixture<NavgdahboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavgdahboardComponent]
    });
    fixture = TestBed.createComponent(NavgdahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
