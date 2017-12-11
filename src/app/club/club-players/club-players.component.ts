import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../../player/player.service";
import {Club} from "../club.model";

@Component({
  selector: 'app-club-players',
  templateUrl: './club-players.component.html',
  styleUrls: ['./club-players.component.css']
})
export class ClubPlayersComponent implements OnInit {

  @Input() club: Club;

  private playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }

  ngOnInit() {
  }
}
