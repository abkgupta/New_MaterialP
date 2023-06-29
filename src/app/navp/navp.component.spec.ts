import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpComponent } from './navp.component';

describe('NavpComponent', () => {
  let component: NavpComponent;
  let fixture: ComponentFixture<NavpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
