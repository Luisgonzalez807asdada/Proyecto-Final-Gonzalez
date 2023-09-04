import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { AltaAlumnosComponent } from './pages/alta-alumnos/alta-alumnos.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'alta-alumnos',
    component: AltaAlumnosComponent,
  },
  {
    path:'**',
    redirectTo: '/users',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
