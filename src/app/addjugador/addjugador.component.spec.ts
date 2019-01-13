import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjugadorComponent } from './addjugador.component';

describe('AddjugadorComponent', () => {
  let component: AddjugadorComponent;
  let fixture: ComponentFixture<AddjugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
