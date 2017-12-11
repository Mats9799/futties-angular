import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {ClubComponent} from "./club/club.component";
import {TeamComponent} from "./team/team.component";
import {ClubPlayersComponent} from "./club/club-players/club-players.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'clubs', component: ClubComponent,
    children: [
      { path: ':id', component: ClubPlayersComponent }
    ]
  },
  { path: 'players', component: PlayerComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
