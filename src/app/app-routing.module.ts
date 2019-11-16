import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'insurance', loadChildren: './insurance/insurance.module#InsurancePageModule' },
  { path: 'nhif', loadChildren: './nhif/nhif.module#NhifPageModule' },
  { path: 'minet', loadChildren: './minet/minet.module#MinetPageModule' },
  { path: 'equimed', loadChildren: './equimed/equimed.module#EquimedPageModule' },
  { path: 'madison', loadChildren: './madison/madison.module#MadisonPageModule' },
  { path: 'resolution', loadChildren: './resolution/resolution.module#ResolutionPageModule' },
  { path: 'apa', loadChildren: './apa/apa.module#ApaPageModule' },
  { path: 'kwft', loadChildren: './kwft/kwft.module#KwftPageModule' },
  { path: 'jubilee', loadChildren: './jubilee/jubilee.module#JubileePageModule' },
  { path: 'hosidetails', loadChildren: './hosidetails/hosidetails.module#HosidetailsPageModule' },
  { path: 'chemdetails', loadChildren: './chemdetails/chemdetails.module#ChemdetailsPageModule' },
  { path: 'hosidetails/:id', loadChildren: './hosidetails/hosidetails.module#HosidetailsPageModule'},
  { path: 'map', loadChildren: './map/map.module#MapPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
