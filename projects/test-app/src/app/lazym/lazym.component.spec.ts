import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazymComponent } from './lazym.component';

describe('LazymComponent', () => {
  let component: LazymComponent;
  let fixture: ComponentFixture<LazymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
