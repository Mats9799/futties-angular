import {environment} from '../../environments/environment.prod';
import {Http, Headers} from '@angular/http';

import {Injectable} from '@angular/core';
import {Team} from "./team.model";
import {Player} from "../player/player.model";

@Injectable()
export class TeamService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/teams';
  private team: Team;

  constructor(private http: Http) {
    this.getTeamFromDb();
  }

  addPlayer(player: Player): void {
    this.team.players.push(player);
  }

  public getTeam(): Team {
    return this.team;
  }

  public getTeamFromDb(): Promise<Team> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.team = response.json() as Team;
        return response.json() as Team;
      })
      .catch(error => {
        return null;
      });
  }

  removePlayer(player: Player): void {
    this.team.players.splice(this.team.players.indexOf(player), 1);
  }
}
