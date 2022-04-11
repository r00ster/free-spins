import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeSpinsComponent } from './free-spins/free-spins.component';

const routes: Routes = [
  { path: '', redirectTo: "/free-spins", pathMatch: 'full' },
  { path: 'free-spins', component: FreeSpinsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
