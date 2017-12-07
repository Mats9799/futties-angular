import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../player.model";
import {ActivatedRoute, Data} from "@angular/router";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() players: Player[];

  private playerService: PlayerService;
  private route: ActivatedRoute;

  constructor(playerService: PlayerService, route: ActivatedRoute) {
    this.playerService = playerService;
    this.route = route;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.players = data['players'];
        console.log(this.players);
      });
  }
}
