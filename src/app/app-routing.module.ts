import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavpComponent } from './navp/navp.component';
import { MgridComponent } from './mgrid/mgrid.component';
import { TabComponent } from './tab/tab.component';
import { MatsprComponent } from './matspr/matspr.component';
import { MatslctComponent } from './matslct/matslct.component';
import { AutocomplComponent } from './autocompl/autocompl.component';
import { ChckboxComponent } from './chckbox/chckbox.component';

const routes: Routes = [
  {
    path: 'navp',
    component: NavpComponent
  },
  {
    path: 'mgrid',
    component: MgridComponent
  },
  {
    path: 'mtab',
    component: TabComponent
  },
  {
    path: 'matspr',
    component: MatsprComponent
  },
  {
    path: 'matslct',
    component: MatslctComponent
  },
  {
    path: 'autocompl',
    component: AutocomplComponent
  },
  {
    path: 'chckbox',
    component: ChckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
