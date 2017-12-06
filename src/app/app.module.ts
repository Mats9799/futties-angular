import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ClubComponent } from './club/club.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ClubComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
