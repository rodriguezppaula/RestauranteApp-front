export interface LoginModel {
  email: string;
  password: string;
}

export interface RegisterModel {
  nombre: string;
  email: string;
  password: string;
  rol: string;
}

export interface AuthResponseModel {
  token: string;
  email: string;
  rol: string;
  nombre: string;
}