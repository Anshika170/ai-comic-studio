import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storyboard } from './storyboard';

describe('Storyboard', () => {
  let component: Storyboard;
  let fixture: ComponentFixture<Storyboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storyboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Storyboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
