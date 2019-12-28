import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowItWorkComponent } from './pages/how-it-work/how-it-work.component';
import { JobOpeningsComponent } from './pages/job-openings/job-openings.component';
import { EmployersComponent } from './pages/employers/employers.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobFiltersComponent } from './components/job-filters/job-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    HowItWorkComponent,
    JobOpeningsComponent,
    EmployersComponent,
    JobCardComponent,
    JobFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
