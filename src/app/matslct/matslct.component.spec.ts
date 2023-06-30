import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatslctComponent } from './matslct.component';

describe('MatslctComponent', () => {
  let component: MatslctComponent;
  let fixture: ComponentFixture<MatslctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatslctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatslctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
