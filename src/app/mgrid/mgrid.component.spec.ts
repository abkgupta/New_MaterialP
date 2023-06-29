import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgridComponent } from './mgrid.component';

describe('MgridComponent', () => {
  let component: MgridComponent;
  let fixture: ComponentFixture<MgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
