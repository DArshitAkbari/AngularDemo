import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { TestDetailComponent } from './test-detail/test-detail.component';

const routes: Routes = [
  { path:'',redirectTo:'/dashboard',pathMatch:'full'  },
  { path:'tests', component: TestsComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'detail/:id',component:TestDetailComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
