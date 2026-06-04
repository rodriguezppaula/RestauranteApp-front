import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginModel, RegisterModel, AuthResponseModel } from '../../models/auth.model/auth.model';
<<<<<<< HEAD
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
=======

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
  private apiUrl = 'https://localhost:7166/api/auth';

  login(datos: LoginModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/login`, datos).pipe(
<<<<<<< HEAD
      tap(res => {
        localStorage.setItem('token', res.token);
      })
=======
      tap(res => localStorage.setItem('token', res.token))
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
    );
  }

  register(datos: RegisterModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/register`, datos).pipe(
<<<<<<< HEAD
      tap(res => {
        localStorage.setItem('token', res.token);
      })
=======
      tap(res => localStorage.setItem('token', res.token))
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
    );
  }

  logout(): void {
    localStorage.removeItem('token');
<<<<<<< HEAD
    this.router.navigate(['/auth']);
=======
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
<<<<<<< HEAD

  getRol(): string | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || payload['role'] || null;
    } catch {
      return null;
    }
  }

  isAdmin(): boolean { return this.getRol() === 'Admin'; }
  isMesero(): boolean { return this.getRol() === 'Mesero'; }
  isCliente(): boolean { return this.getRol() === 'Cliente'; }
=======
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
}