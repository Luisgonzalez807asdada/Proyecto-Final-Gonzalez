import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { AltaAlumnosComponent } from 'src/app/pages/alta-alumnos/alta-alumnos.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule.forRoot([
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
    ])
  ],
  exports:[
    SidebarComponent
  ]
})
export class SidebarModule { }
