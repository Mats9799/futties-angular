import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {ClubComponent} from "./club/club.component";
import {PlayerResolver} from "./player/player-resolver.service";
import {TeamComponent} from "./team/team.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'clubs', component: ClubComponent },
  { path: 'players', component: PlayerComponent, resolve: {players: PlayerResolver} },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
