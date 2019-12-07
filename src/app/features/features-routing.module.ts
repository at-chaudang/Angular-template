import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeaturesComponent,
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
