import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exe12Component } from './pages/exe12/exe12.component';
import { Exe1314Component } from './pages/exe1314/exe1314.component';

const routes: Routes = [{
  path: 'exe12', component: Exe12Component
},
{
  path: "exe1314", component: Exe1314Component
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
