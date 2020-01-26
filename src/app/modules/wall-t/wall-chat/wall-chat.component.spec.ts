import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallChatComponent } from './wall-chat.component';

describe('WallChatComponent', () => {
  let component: WallChatComponent;
  let fixture: ComponentFixture<WallChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
