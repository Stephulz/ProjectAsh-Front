import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoSearchComponent } from './jogo-search.component';

describe('JogoSearchComponent', () => {
  let component: JogoSearchComponent;
  let fixture: ComponentFixture<JogoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
