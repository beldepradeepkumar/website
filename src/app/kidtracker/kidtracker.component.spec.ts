import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidtrackerComponent } from './kidtracker.component';

describe('KidtrackerComponent', () => {
  let component: KidtrackerComponent;
  let fixture: ComponentFixture<KidtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
