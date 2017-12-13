import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ClubComponent } from './club/club.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { HeaderComponent } from './header/header.component';
import {PlayerService} from './player/player.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import { PlayerListComponent } from './player/player-list/player-list.component';
import {ClubService} from "./club/club.service";
import {TeamComponent} from "./team/team.component";
import { ClubListComponent } from './club/club-list/club-list.component';
import { ClubDetailComponent } from './club/club-detail/club-detail.component';
import { ClubPlayersComponent } from './club/club-players/club-players.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TeamPlayersComponent } from './team/team-players/team-players.component';
import { TeamPlayerDetailComponent } from './team/team-player-detail/team-player-detail.component';
import {TeamService} from "./team/team.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ClubComponent,
    PlayerDetailComponent,
    HeaderComponent,
    PlayerListComponent,
    TeamComponent,
    ClubListComponent,
    ClubDetailComponent,
    ClubPlayersComponent,
    PlayerEditComponent,
    TeamPlayersComponent,
    TeamPlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClubService, PlayerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
