import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  logoUrl = '/assets/BL_logo_square_jpg.jpg'; // BridgeLabz Logo URL

  ngOnInit(): void {
    this.title = 'Hello from BridgeLabz';
  }

  openBridgeLabz(): void {
    window.open('https://www.bridgelabz.com', '_blank'); // Opens site in a new tab
  }
}
