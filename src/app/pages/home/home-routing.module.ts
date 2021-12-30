import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { IntroGuard } from './../../guards/intro.guard';
import { AutoLoginGuard } from './../../guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: '/login',
    loadChildren: () => import('./../../pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
