import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Page3Component } from './page3/page3.component';


const routes: Routes = [
  { path: "component-one", component: Page1Component },
  
  {
    path: "component-two",
    component: Page2Component,
 //   outlet: "sidebar",
 children:
 [

{ path: "component-3", component: Page3Component, 
 // outlet: "sidebar"
},
 // { path: '', component: Page3Component, abc
//   outlet: "sidebar"
// },
]
  },
  {
    path: "component-aux",
    component: SidebarComponent,
    outlet: "sidebar"
  },
  { path: 'lazy-mod', loadChildren: () => import('./lazym/lazym.module').then(m => m.LazymModule),
    // outlet: "sidebar"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
