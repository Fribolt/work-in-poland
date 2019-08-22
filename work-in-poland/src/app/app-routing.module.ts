import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HowItWorkComponent } from './pages/how-it-work/how-it-work.component';
import { JobOpeningsComponent } from './pages/job-openings/job-openings.component';
import { EmployersComponent } from './pages/employers/employers.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'how-it-work', component: HowItWorkComponent },
  { path: 'job-opening', component: JobOpeningsComponent },
  { path: 'employers', component:  EmployersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
