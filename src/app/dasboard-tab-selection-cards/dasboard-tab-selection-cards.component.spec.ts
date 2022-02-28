import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardTabSelectionCardsComponent } from './dasboard-tab-selection-cards.component';

describe('DasboardTabSelectionCardsComponent', () => {
  let component: DasboardTabSelectionCardsComponent;
  let fixture: ComponentFixture<DasboardTabSelectionCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardTabSelectionCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardTabSelectionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
