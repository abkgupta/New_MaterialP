import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavpComponent } from './navp/navp.component';
import { MgridComponent } from './mgrid/mgrid.component';

const routes: Routes = [
  {
    path: 'navp',
    component: NavpComponent
  },
  {
    path: 'mgrid',
    component: MgridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
