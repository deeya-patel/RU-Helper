import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BySchoolComponent } from './components/by-school/by-school.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'by-school', component: BySchoolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
