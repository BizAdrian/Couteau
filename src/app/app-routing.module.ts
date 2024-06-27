import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'couteau',
    pathMatch: 'full'
  },
  {
    path: 'couteau',
    loadChildren: () => import('./couteau/couteau.module').then( m => m.CouteauModule)
  },
  {
    path: 'wordpress',
    loadChildren: () => import('./wordpress/wordpress.module').then( m => m.WordpressPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
