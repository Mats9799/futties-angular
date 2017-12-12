import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../player/player.service";
import {Club} from "../club.model";
import {ClubService} from "../club.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-club-players',
  templateUrl: './club-players.component.html',
  styleUrls: ['./club-players.component.css']
})
export class ClubPlayersComponent implements OnInit {

  private club: Club;
  private clubService: ClubService;
  private playerService: PlayerService;

  constructor(clubService: ClubService, playerService: PlayerService, private route: ActivatedRoute) {
    this.clubService = clubService;
    this.playerService = playerService;
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.club = this.clubService.getClubById(params['id']);
        }
      );
  }
}
