import {Component, OnInit} from '@angular/core';
import {Player} from "../player.model";
import {ActivatedRoute, Data} from "@angular/router";
import {PlayerService} from "../player.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  private players: Player[] = [];
  private playersChanged = new Observable<Player[]>();
  private playerService: PlayerService;
  private route: ActivatedRoute;

  constructor(playerService: PlayerService, route: ActivatedRoute) {
    this.playerService = playerService;
    this.route = route;

    this.playersChanged = new Observable(observer => {
      playerService.getPlayers().then(() => {
        observer.complete();
      });
    });
  }

  ngOnInit() {
    this.playerService.getPlayers()
      .then((players) => {
        this.players = players;
        console.log(this.players);
      })
      .catch(error => console.log(error));
  }
}
