import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  private playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }

  ngOnInit() {
    // this.playerService.fetchPlayers();
  }
}
