import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptimizationsComponent } from './components/optimizations/optimizations.component';

const routes: Routes = [
    { path: 'optimizations/:campaignId', component: OptimizationsComponent },
    { path: '**', redirectTo: 'optimizations/34' },
    {
      path: '',
      redirectTo: 'optimizations/34',
      pathMatch: 'full',
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }