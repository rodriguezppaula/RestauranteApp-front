import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const rolesPermitidos: string[] = route.data['roles'] || [];
  const rolUsuario = auth.getRol();

  if (rolUsuario && rolesPermitidos.includes(rolUsuario)) return true;

  router.navigate(['/acceso-denegado']);
  return false;
};