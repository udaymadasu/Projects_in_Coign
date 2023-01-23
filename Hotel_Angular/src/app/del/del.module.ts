import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelRoutingModule } from './del-routing.module';
import { DelComponent } from './del.component';

@NgModule({
  declarations: [
    DelComponent
  ],
  imports: [
    CommonModule,
    DelRoutingModule
  ]
})
export class DelModule { }
