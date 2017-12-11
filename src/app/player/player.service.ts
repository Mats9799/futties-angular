import {environment} from '../../environments/environment.prod';
import {Http, Headers} from '@angular/http';

import {Player} from './player.model';
import {Injectable} from '@angular/core';
import {FuttiesPlayer} from './futtiesplayer.model';

@Injectable()
export class PlayerService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/players';
  private players: Player[];

  constructor(private http: Http) { }

  public getPlayers(): Promise<FuttiesPlayer[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.players = response.json() as FuttiesPlayer[];
        return response.json() as FuttiesPlayer[];
      })
      .catch(error => {
        return FuttiesPlayer[0];
      });
  }

  getPlayer(index: number) {
    return this.players[index];
  }

  getPlayer(id: string): Player {
    return this.players.find({_id: id});
  }
}
