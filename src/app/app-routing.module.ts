import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'home/:id', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'compare', loadChildren: './pages/compare/compare.module#ComparePageModule' },
  { path: 'compare/:id', loadChildren: './pages/compare/compare.module#ComparePageModule' },
  { path: 'cart-ecommerce', loadChildren: './pages/cart-ecommerce/cart-ecommerce.module#CartEcommercePageModule' },
  { path: 'cart-ecommerce/:id', loadChildren: './pages/cart-ecommerce/cart-ecommerce.module#CartEcommercePageModule' },

// forms
  { path: 'forms-gambela', loadChildren: './forms/forms-gambela/forms-gambela.module#FormsGambelaPageModule' },
  { path: 'forms-zando', loadChildren: './forms/forms-zando/forms-zando.module#FormsZandoPageModule' },
  { path: 'forms-liberte', loadChildren: './forms/forms-liberte/forms-liberte.module#FormsLibertePageModule' },
  { path: 'forms-zigida', loadChildren: './forms/forms-zigida/forms-zigida.module#FormsZigidaPageModule' },

// pages super market
  { path: 'super-marche', loadChildren: './pages/super-marche/super-marche.module#SuperMarchePageModule' },
  { path: 'super-marche/:id', loadChildren: './pages/super-marche/super-marche.module#SuperMarchePageModule' },

// pages market
  { path: 'zando', loadChildren: './pages/zando/zando.module#ZandoPageModule' },
  { path: 'zando/:id', loadChildren: './pages/zando/zando.module#ZandoPageModule' },
  { path: 'liberte', loadChildren: './pages/liberte/liberte.module#LibertePageModule' },
  { path: 'liberte/:id', loadChildren: './pages/liberte/liberte.module#LibertePageModule' },
  { path: 'gambela', loadChildren: './pages/gambela/gambela.module#GambelaPageModule' },
  { path: 'gambela/:id', loadChildren: './pages/gambela/gambela.module#GambelaPageModule' },
  { path: 'zigida', loadChildren: './pages/zigida/zigida.module#ZigidaPageModule' },
  { path: 'zigida/:id', loadChildren: './pages/zigida/zigida.module#ZigidaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
