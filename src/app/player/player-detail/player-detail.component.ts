import {Component, Input} from '@angular/core';

import {Player} from '../player.model';
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../../team/team.service";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {

  @Input() player: Player;

  constructor(private playerService: PlayerService, private teamService: TeamService, private route: ActivatedRoute, private router: Router) { }

  onClaim(): void {
    this.teamService.addPlayer(this.player);
  }

  onDelete(): void {
    this.playerService.deletePlayer(this.player);
  }

  onEdit(): void {
    this.router.navigate([this.player._id + '/edit'], {relativeTo: this.route});
  }
}
