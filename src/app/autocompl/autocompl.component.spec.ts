import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocomplComponent } from './autocompl.component';

describe('AutocomplComponent', () => {
  let component: AutocomplComponent;
  let fixture: ComponentFixture<AutocomplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocomplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocomplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
