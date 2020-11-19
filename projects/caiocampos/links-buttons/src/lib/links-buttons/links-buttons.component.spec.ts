import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinksButtonsComponent } from './links-buttons.component';

describe('LinksButtonsComponent', () => {
  let component: LinksButtonsComponent;
  let fixture: ComponentFixture<LinksButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
