import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {ClubComponent} from "./club/club.component";
import {TeamComponent} from "./team/team.component";
import {ClubPlayersComponent} from "./club/club-players/club-players.component";
import {PlayerEditComponent} from "./player/player-edit/player-edit.component";
import {ClubListComponent} from "./club/club-list/club-list.component";
import {PlayerListComponent} from "./player/player-list/player-list.component";
import {TeamPlayersComponent} from "./team/team-players/team-players.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'clubs', component: ClubComponent,
    children: [
      { path: '', component: ClubListComponent },
      { path: ':id', component: ClubPlayersComponent }
    ]
  },
  { path: 'players', component: PlayerComponent,
    children: [
      { path: '', component: PlayerListComponent },
      { path: ':id/edit', component: PlayerEditComponent }
    ]
  },
  { path: 'team', component: TeamComponent,
    children: [
      { path: '', component: TeamPlayersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
