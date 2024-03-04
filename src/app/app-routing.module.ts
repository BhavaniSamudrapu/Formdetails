import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
  {path: '', redirectTo:'/app',pathMatch:'full'},
  {path:'app',component:AppComponent},
  {path:'screen2', component:Screen2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
