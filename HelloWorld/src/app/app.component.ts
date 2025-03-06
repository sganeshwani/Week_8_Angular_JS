import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // ✅ Add CommonModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl = '/assets/BL_logo_square_jpg.jpg';
  userName: string = ''; 
  errorMessage: string = ''; 

  ngOnInit(): void {}

  openBridgeLabz(): void {
    window.open('https://www.bridgelabz.com', '_blank');
  }

  validateUserName(): void {
    const nameRegex = /^[A-Z][a-zA-Z ]{2,}$/;
    this.errorMessage = this.userName.match(nameRegex) ? '' : "Invalid Name! First letter must be capital and min 3 letters.";
  }
}
