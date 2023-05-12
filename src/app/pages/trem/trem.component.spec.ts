import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TremComponent } from './trem.component';

describe('TremComponent', () => {
  let component: TremComponent;
  let fixture: ComponentFixture<TremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
