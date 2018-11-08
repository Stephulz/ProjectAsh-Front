import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJogoComponent } from './new-jogo.component';

describe('NewJogoComponent', () => {
  let component: NewJogoComponent;
  let fixture: ComponentFixture<NewJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
