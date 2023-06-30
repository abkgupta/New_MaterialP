import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsprComponent } from './matspr.component';

describe('MatsprComponent', () => {
  let component: MatsprComponent;
  let fixture: ComponentFixture<MatsprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatsprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatsprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
