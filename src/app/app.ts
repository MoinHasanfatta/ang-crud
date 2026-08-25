import { Component, signal } from '@angular/core';
import { StudentCrud } from './student-crud/student-crud';

@Component({
  selector: 'app-root',
  imports: [StudentCrud],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-crud');
}
