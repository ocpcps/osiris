import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true  // Indica que este é um componente standalone
})
export class AppComponent {
  title = 'frontend';
}
