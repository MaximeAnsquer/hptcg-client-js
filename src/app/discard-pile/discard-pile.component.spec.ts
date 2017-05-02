import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardPileComponent } from './discard-pile.component';

describe('DiscardPileComponent', () => {
  let component: DiscardPileComponent;
  let fixture: ComponentFixture<DiscardPileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscardPileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscardPileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
