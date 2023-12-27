import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCourseComponent } from './ajouter-course.component';

describe('AjouterCourseComponent', () => {
  let component: AjouterCourseComponent;
  let fixture: ComponentFixture<AjouterCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterCourseComponent]
    });
    fixture = TestBed.createComponent(AjouterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
