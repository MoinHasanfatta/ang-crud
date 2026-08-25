import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCrud } from './student-crud';

describe('StudentCrud', () => {
  let component: StudentCrud;
  let fixture: ComponentFixture<StudentCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
