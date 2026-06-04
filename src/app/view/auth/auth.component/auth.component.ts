<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  modo: 'login' | 'register' = 'login';
  error = '';
  cargando = false;

  loginData = { email: '', password: '' };
  registerData = { nombre: '', email: '', password: '', rol: 'Cliente' };

  login() {
    this.error = '';
    this.cargando = true;
    this.authService.login(this.loginData).subscribe({
      next: () => this.router.navigate(['/plato']),
      error: () => {
        this.error = 'Correo o contraseña incorrectos.';
        this.cargando = false;
      }
    });
  }

  register() {
    this.error = '';
    this.cargando = true;
    this.authService.register(this.registerData).subscribe({
      next: () => this.router.navigate(['/plato']),
      error: () => {
        this.error = 'Error al registrar. Verifica los datos.';
        this.cargando = false;
      }
    });
  }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth.component',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
