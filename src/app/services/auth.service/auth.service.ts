import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginModel, RegisterModel, AuthResponseModel } from '../../models/auth.model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7166/api/auth';

  login(datos: LoginModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/login`, datos).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  register(datos: RegisterModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/register`, datos).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}