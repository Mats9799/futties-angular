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
import {PlayerResolver} from "./player/player-resolver.service";
import {TeamComponent} from "./team/team.component";
import { ClubListComponent } from './club/club-list/club-list.component';
import { ClubDetailComponent } from './club/club-detail/club-detail.component';
import { ClubPlayersComponent } from './club/club-players/club-players.component';

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
    ClubPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ClubService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
