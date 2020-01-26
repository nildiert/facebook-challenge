import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallSidenavComponent } from './wall-sidenav.component';

describe('WallSidenavComponent', () => {
  let component: WallSidenavComponent;
  let fixture: ComponentFixture<WallSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
