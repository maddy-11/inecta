import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditModalComponent } from './dashboard-edit-modal.component';

describe('DashboardEditModalComponent', () => {
  let component: DashboardEditModalComponent;
  let fixture: ComponentFixture<DashboardEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
