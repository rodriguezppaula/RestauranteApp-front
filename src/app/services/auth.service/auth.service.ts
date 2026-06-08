import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginModel, RegisterModel, AuthResponseModel } from '../../models/auth.model/auth.model';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private apiUrl = 'https://localhost:7166/api/auth';

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private leer(key: string): string {
    return this.isBrowser ? (localStorage.getItem(key) ?? '') : '';
  }

  readonly loggedIn = signal<boolean>(this.isBrowser && !!localStorage.getItem('token'));
  readonly nombre   = signal<string>(this.leer('u_nombre'));
  readonly rol      = signal<string>(this.leer('u_rol'));

  readonly isAdmin   = computed(() => this.rol() === 'Admin');
  readonly isMesero  = computed(() => this.rol() === 'Mesero');
  readonly isCliente = computed(() => this.rol() === 'Cliente');

  private guardarSesion(res: AuthResponseModel): void {
    localStorage.setItem('token', res.token);
    localStorage.setItem('u_nombre', res.nombre);
    localStorage.setItem('u_rol', res.rol);
    this.loggedIn.set(true);
    this.nombre.set(res.nombre);
    this.rol.set(res.rol);
  }

  login(datos: LoginModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/login`, datos).pipe(
      tap(res => this.guardarSesion(res))
    );
  }

  register(datos: RegisterModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/register`, datos).pipe(
      tap(res => this.guardarSesion(res))
    );
  }

  logout(): void {
    ['token', 'u_nombre', 'u_rol'].forEach(k => localStorage.removeItem(k));
    this.loggedIn.set(false);
    this.nombre.set('');
    this.rol.set('');
    this.router.navigate(['/auth']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean { return this.loggedIn(); }
  getRol(): string | null { return this.rol() || null; }
  getNombre(): string { return this.nombre(); }
}