import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { HowItWorkComponent } from "./pages/how-it-work/how-it-work.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'how-it-work', component: HowItWorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
