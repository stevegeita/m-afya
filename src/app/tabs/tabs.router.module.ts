import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'hospital',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../hospital/hospital.module').then(m => m.HospitalPageModule)
          }
        ]
      },
      {
        path: 'pharmacy',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pharmacy/pharmacy.module').then(m => m.PharmacyPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'nhif',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../nhif/nhif.module').then(m => m.NhifPageModule)
          }
        ]
      },
      {
        path: 'equimed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../equimed/equimed.module').then(m => m.EquimedPageModule)
          }
        ]
      },
      {
        path: 'minet',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../minet/minet.module').then(m => m.MinetPageModule)
          }
        ]
      },
      {
        path: 'madison',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../madison/madison.module').then(m => m.MadisonPageModule)
          }
        ]
      },
      {
        path: 'resolution',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../resolution/resolution.module').then(m => m.ResolutionPageModule)
          }
        ]
      },
      {
        path: 'apa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../apa/apa.module').then(m => m.ApaPageModule)
          }
        ]
      },
      {
        path: 'kwft',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../kwft/kwft.module').then(m => m.KwftPageModule)
          }
        ]
      },
      {
        path: 'jubilee',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../jubilee/jubilee.module').then(m => m.JubileePageModule)
          }
        ]
      },
      {
        path: 'insurance',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../insurance/insurance.module').then(m => m.InsurancePageModule)
          }
        ]
      },
      {
        path: 'hosidetails',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hosidetails/hosidetails.module').then(m => m.HosidetailsPageModule)
          }
        ]
      },
      {
        path: 'insurance',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chemdetails/chemdetails.module').then(m => m.ChemdetailsPageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../map/map.module').then(m => m.MapPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
