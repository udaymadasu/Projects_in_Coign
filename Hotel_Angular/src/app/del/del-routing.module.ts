import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelComponent } from './del.component';

const routes: Routes = [{path:"",component:DelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelRoutingModule { }
