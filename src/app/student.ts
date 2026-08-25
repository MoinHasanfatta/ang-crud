
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root', // available app-wide, no need to add to providers
})
export class StudentService {

  // 1. Signal holding the list of students (our "database")
  students: WritableSignal<Student[]> = signal<Student[]>([
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', marks: 78 },
    { id: 2, name: 'Priya Singh', email: 'priya@example.com', marks: 92 },
  ]);

  // helper to auto-generate next id
  private nextId = 3;

  // 2. CREATE - add a new student
  addStudent(student: Omit<Student, 'id'>) {
    const newStudent: Student = { id: this.nextId++, ...student };
    // update() gives us the current array so we can return a new one (immutability)
    this.students.update(list => [...list, newStudent]);
  }

  // 3. READ - just return the signal itself, component will read it directly
  getStudents() {
    return this.students;
  }

  // 4. UPDATE - find student by id and replace with updated values
  updateStudent(updated: Student) {
    this.students.update(list =>
      list.map(s => (s.id === updated.id ? updated : s))
    );
  }

  // 5. DELETE - remove student by id
  deleteStudent(id: number) {
    this.students.update(list => list.filter(s => s.id !== id));
  }
}
