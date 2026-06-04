import { Routes } from '@angular/router';
import { AuthComponent } from './view/auth/auth.component/auth.component';
import { CategoriaComponent } from './view/categoria/categoria.component/categoria.component';
import { MesaComponent } from './view/mesa/mesa.component/mesa.component';
import { PedidoComponent } from './view/pedido/pedido.component/pedido.component';
import { PlatoComponent } from './view/plato/plato.component/plato.component';
import { UsuarioComponent } from './view/usuario/usuario.component/usuario.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'plato', component: PlatoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'categoria', component: CategoriaComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'mesa', component: MesaComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Admin', 'Mesero'] }
  },
  {
    path: 'pedido', component: PedidoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'usuario', component: UsuarioComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['Admin'] }
  },
  { path: 'acceso-denegado', loadComponent: () => import('./view/acceso-denegado/acceso-denegado.component').then(m => m.AccesoDenegadoComponent) },
  { path: '**', redirectTo: 'auth' }
];