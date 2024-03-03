import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerslistComponent } from './components/customerslist/customerslist.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }, {
    path: 'customer-list',
    component: CustomerslistComponent,
  },{
    path:'service-detail',
    component:ServiceDetailComponent
  }
  ,{path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
