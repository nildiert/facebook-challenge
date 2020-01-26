import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderWallComponent } from './modules/wall-t/header-wall/header-wall.component';
import { WallSidenavComponent } from './modules/wall-t/wall-sidenav/wall-sidenav.component';
import { WallChatComponent } from './modules/wall-t/wall-chat/wall-chat.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'wall',
    loadChildren: () => import('./modules/wall-t/wall-t.module').then(({ WallTModule }) => WallTModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
})
export class AppRoutingModule { }
