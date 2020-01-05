import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymRoutingModule } from './lazym-routing.module';
import { LazymComponent } from './lazym.component';
import { Lazycomp1Component } from '../lazycomp1/lazycomp1.component';


@NgModule({
  declarations: [LazymComponent, Lazycomp1Component],
  imports: [
    CommonModule,
    LazymRoutingModule
  ]
})
export class LazymModule { }
