import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './view/navbar/navbar.component';
import { AuthService } from './services/auth.service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  template: `
    @if (auth.isLoggedIn()) {
      <app-navbar />
    }
    <router-outlet />
  `
})
export class App {
  auth = inject(AuthService);
}