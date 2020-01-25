import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallCenterComponent } from './wall-center.component';

describe('WallCenterComponent', () => {
  let component: WallCenterComponent;
  let fixture: ComponentFixture<WallCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
