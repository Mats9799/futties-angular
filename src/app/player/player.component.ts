import {Component, OnInit} from '@angular/core';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.fetchPlayers();
  }
}
