import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysadmaPage } from './mysadma.page';

const routes: Routes = [
  {
    path: '',
    component: MysadmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysadmaPageRoutingModule {}
