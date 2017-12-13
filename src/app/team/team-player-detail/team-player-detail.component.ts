import {Component, Input} from '@angular/core';
import {Player} from "../../player/player.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-team-player-detail',
  templateUrl: './team-player-detail.component.html',
  styleUrls: ['./team-player-detail.component.css']
})
export class TeamPlayerDetailComponent {

  @Input() player: Player;

  constructor(private teamService: TeamService, private route: ActivatedRoute, private router: Router) { }

  onDelete(): void {
    this.teamService.removePlayer(this.player);
  }
}
