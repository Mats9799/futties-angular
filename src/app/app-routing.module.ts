import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component: PlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
