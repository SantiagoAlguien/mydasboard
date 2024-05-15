import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent:() =>import('./dashboard/dashboard.component'),
        children: [
          {
            path:'change-detection',
            title:'Change-Detection',
            loadComponent: () =>import('./dashboard/pages/change-detection/change-detection.component').then(m => m.ChangeDetectionComponent as Type<any>),
          },
          {
            path:'control-flow',
            title:'Control-Flow',
            loadComponent: () =>import('./dashboard/pages/control-flow/control-flow.component').then(m => m.ControlFlowComponent as Type<any>),
          },
          {
            path:'defer-options',
            title:'Defer-Options',
            loadComponent: () =>import('./dashboard/pages/defer-options/defer-options.component').then(m => m.DeferOptionsComponent as Type<any>),
          },
          {
            path:'defer-views',
            title:'Defer-Views',
            loadComponent: () =>import('./dashboard/pages/defer-views/defer-views.component').then(m => m.DeferViewsComponent as Type<any>),
          },
          {
            path:'user/:id',
            title:'User View',
            loadComponent: () =>import('./dashboard/pages/users/users.component').then(m => m.UsersComponent as Type<any>),
          },
          {
            path:'user-list',
            title:'User List',
            loadComponent: () =>import('./dashboard/pages/users/users.component').then(m => m.UsersComponent as Type<any>),
          },
          {
            path:'view-transition',
            title:'View Transition',
            loadComponent: () =>import('./dashboard/pages/view-transtion/view-transtion.component').then(m => m.ViewTranstionComponent as Type<any>),
          },
          {
            path:'',redirectTo:'control-flow', pathMatch:'full'
          }
        ]
    },
    {
      path:'',
      redirectTo: '/dashboard',
      pathMatch:'full'
    }
];
