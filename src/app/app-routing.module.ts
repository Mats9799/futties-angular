import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {ClubComponent} from "./club/club.component";
import {PlayerResolver} from "./player/player-resolver.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'clubs', component: ClubComponent },
  { path: 'players', component: PlayerComponent, resolve: {players: PlayerResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
