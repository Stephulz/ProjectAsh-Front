import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDetailsComponent } from './jogo-details.component';

describe('JogoDetailsComponent', () => {
  let component: JogoDetailsComponent;
  let fixture: ComponentFixture<JogoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
