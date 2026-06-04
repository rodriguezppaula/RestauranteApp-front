import { Routes } from '@angular/router';
import { CategoriaComponent } from './view/categoria/categoria.component/categoria.component';
import { MesaComponent } from './view/mesa/mesa.component/mesa.component';
import { PedidoComponent } from './view/pedido/pedido.component/pedido.component';
import { PlatoComponent } from './view/plato/plato.component/plato.component';
import { UsuarioComponent } from './view/usuario/usuario.component/usuario.component';
import { AuthComponent } from './view/auth/auth.component/auth.component';

export const routes: Routes = [
    { path: '', redirectTo:'auth', pathMatch: 'full'},
    { path: 'categoria', component: CategoriaComponent },
    { path: 'mesa', component: MesaComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: 'plato', component: PlatoComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'auth', component: AuthComponent }

];

