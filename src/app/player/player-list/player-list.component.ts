import {Component, OnInit} from '@angular/core';
import {Player} from "../player.model";
import {ActivatedRoute, Data} from "@angular/router";
import {PlayerService} from "../player.service";
import {FuttiesPlayer} from "../futtiesplayer.model";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  private players: Player[] = [];
  private playerService: PlayerService;
  private route: ActivatedRoute;

  constructor(playerService: PlayerService, route: ActivatedRoute) {
    this.playerService = playerService;
    this.route = route;

    const player1 = new FuttiesPlayer('Sadio Mané', 25, 175, 'Senegal', 'Aanvaller', 1, 1);
    const player2 = new FuttiesPlayer('Adam Lallana', 29, 172, 'Engeland', 'Middenvelder', 1, 1);
    this.players[0] = player1;//a
    this.players[1] = player2;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        //this.players = data['players'];
        console.log(this.players);
      });
  }
}
