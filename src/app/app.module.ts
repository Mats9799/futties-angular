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

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ClubComponent,
    PlayerDetailComponent,
    HeaderComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ClubService, PlayerResolver, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
