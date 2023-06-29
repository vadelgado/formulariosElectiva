import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDiaComponent } from './mes-dia.component';

describe('MesDiaComponent', () => {
  let component: MesDiaComponent;
  let fixture: ComponentFixture<MesDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDiaComponent]
    });
    fixture = TestBed.createComponent(MesDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
