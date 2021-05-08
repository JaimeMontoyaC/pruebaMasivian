import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './components/comic/comic.component';
import { HomeComponent } from './components/home/home.component';

let routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'comic', component: ComicComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
