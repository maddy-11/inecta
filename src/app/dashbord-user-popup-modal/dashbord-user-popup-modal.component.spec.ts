import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordUserPopupModalComponent } from './dashbord-user-popup-modal.component';

describe('DashbordUserPopupModalComponent', () => {
  let component: DashbordUserPopupModalComponent;
  let fixture: ComponentFixture<DashbordUserPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordUserPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordUserPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
