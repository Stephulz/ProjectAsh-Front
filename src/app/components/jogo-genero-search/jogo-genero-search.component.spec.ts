import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoGeneroSearchComponent } from './jogo-genero-search.component';

describe('JogoGeneroSearchComponent', () => {
  let component: JogoGeneroSearchComponent;
  let fixture: ComponentFixture<JogoGeneroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoGeneroSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoGeneroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
