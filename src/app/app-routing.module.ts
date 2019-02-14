import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/core/home/home.component';
import { NotFoundComponent } from './modules/core/not-found/not-found.component';

const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
