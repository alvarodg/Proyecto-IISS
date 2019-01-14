import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjugadorComponent } from './editjugador.component';

describe('EditjugadorComponent', () => {
  let component: EditjugadorComponent;
  let fixture: ComponentFixture<EditjugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
