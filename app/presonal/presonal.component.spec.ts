import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresonalComponent } from './presonal.component';

describe('PresonalComponent', () => {
  let component: PresonalComponent;
  let fixture: ComponentFixture<PresonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresonalComponent]
    });
    fixture = TestBed.createComponent(PresonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
