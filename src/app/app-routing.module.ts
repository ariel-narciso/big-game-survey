import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { HomeComponent } from './pages/home/home.component';
import { RecordsComponent } from './pages/records/records.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'records', component: RecordsComponent
  },
  {
    path: 'charts', component: ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
