import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { algorithmRouter } from '../algorithm/router'

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(algorithmRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
