import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChckboxComponent } from './chckbox.component';

describe('ChckboxComponent', () => {
  let component: ChckboxComponent;
  let fixture: ComponentFixture<ChckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
