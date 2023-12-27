import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoursesComponent } from './liste-courses.component';

describe('ListeCoursesComponent', () => {
  let component: ListeCoursesComponent;
  let fixture: ComponentFixture<ListeCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCoursesComponent]
    });
    fixture = TestBed.createComponent(ListeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
