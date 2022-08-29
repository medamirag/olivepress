import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'press', loadChildren: () => import('./core/prod/prod.module').then(m => m.ProdModule) },
  { path: 'admin', loadChildren: () => import('./core/ref/ref.module').then(m => m.RefModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
