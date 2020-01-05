import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazymComponent } from './lazym.component';
import { Lazycomp1Component } from '../lazycomp1/lazycomp1.component';

const routes: Routes = [
  { path: '',// component: LazymComponent,
//  outlet: "sidebar",
   
   children:
   [
  { path: "lazycomp-one", component: Lazycomp1Component,
    outlet: "sidebar"
 }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazymRoutingModule { }
