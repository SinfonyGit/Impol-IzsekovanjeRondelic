import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { HomeComponent } from './home/home.component';
import { RondelicaComponent } from './rondelica/rondelica.component';
import { RondelicaListComponent } from './rondelica/rondelica-list/rondelica-list.component';
import { RondelicaDetailComponent } from './rondelica/rondelica-detail/rondelica-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'rondelica', component: RondelicaComponent },
  { path: 'rondelica-list', component: RondelicaListComponent },
  { path: 'rondelica/:id', component: RondelicaDetailComponent },
  {  path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
