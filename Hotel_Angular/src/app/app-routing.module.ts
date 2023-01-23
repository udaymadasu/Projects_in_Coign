import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [{path:"" ,loadChildren:()=>import('./login/login.module').then(a=>a.LoginModule)},
{path:'Admin',loadChildren:()=>import('./admin/admin.module').then(a=>a.AdminModule)},
{path:'Dialog',loadChildren:()=>import('./dialog/dialog.module').then(a=>a.DialogModule)},
{path:'Del',loadChildren:()=>import('./del/del.module').then(a=>a.DelModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
