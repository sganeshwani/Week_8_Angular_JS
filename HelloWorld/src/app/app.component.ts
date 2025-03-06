import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for Two-Way Binding

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl = 'assets/BL_logo_square_jpg.jpg';
  userName: string = ''; // Stores the user input

  ngOnInit(): void {}

  openBridgeLabz(): void {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}