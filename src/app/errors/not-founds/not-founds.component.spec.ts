import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundsComponent } from './not-founds.component';

describe('NotFoundsComponent', () => {
  let component: NotFoundsComponent;
  let fixture: ComponentFixture<NotFoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
