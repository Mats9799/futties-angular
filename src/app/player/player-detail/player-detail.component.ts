import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Player} from '../player.model';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  private activatedRoute: ActivatedRoute;
  private id: number;
  private player: Player;
  private playerService: PlayerService;
  private router: Router;

  constructor(playerService: PlayerService, activatedRoute: ActivatedRoute, router: Router) {
    this.playerService = playerService;
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
