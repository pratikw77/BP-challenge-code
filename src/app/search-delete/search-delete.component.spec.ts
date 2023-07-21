import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeleteComponent } from './search-delete.component';

describe('SearchDeleteComponent', () => {
  let component: SearchDeleteComponent;
  let fixture: ComponentFixture<SearchDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDeleteComponent]
    });
    fixture = TestBed.createComponent(SearchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
