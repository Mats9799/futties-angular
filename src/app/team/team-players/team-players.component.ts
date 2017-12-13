import { Component, OnInit } from '@angular/core';
import {TeamService} from "../team.service";
import {PlayerService} from "../../player/player.service";
import {Team} from "../team.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent implements OnInit {

  private playerService: PlayerService;
  private team: Team;
  private teamService: TeamService;

  constructor(playerService: PlayerService, teamService: TeamService, private route: ActivatedRoute) {
    this.playerService = playerService;
    this.teamService = teamService;
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.team = this.teamService.getTeam();
        }
      );
  }
}
