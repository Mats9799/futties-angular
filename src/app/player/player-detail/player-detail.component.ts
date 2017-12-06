import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Player} from '../player.model';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerDetailComponent implements OnInit {

  private activatedRoute: ActivatedRoute;
  private id: number;
  private player: Player;
  private playerService: PlayerService;
  private router: Router;

  constructor(playerService: PlayerService, player: Player, activatedRoute: ActivatedRoute, router: Router) {
    this.playerService = playerService;
    this.player = player;
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: Params) => {
          this.id = + params['id'];
          this.player = this.playerService.getPlayerByIndex(this.id);
        }
      );
  }
}
