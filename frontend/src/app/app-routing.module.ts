import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: '',
   component: FullComponent,
    children: [
      // { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
      {path: 'component',loadChildren: './component/component.module#ComponentsModule'}
    ] },
  // {
  //   path: '**',
  //   redirectTo: '/starter'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true,useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}