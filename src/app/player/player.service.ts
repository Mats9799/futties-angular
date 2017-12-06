import {environment} from '../../environments/environment.prod';
import {Headers} from '@angular/http';
import {Http} from '@angular/http';

import {Player} from './player.model';

export class PlayerService {

  private headers: Headers;
  private http: Http;
  private players: Player[];
  private serverUrl: string;

  constructor(http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.http = http;
    this.serverUrl = environment.serverUrl + '/players';

    this.fetchPlayers();
  }

  // Het ophalen van bestaande players uit de database
  private fetchPlayers(): void {
    this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(players => {
        console.log(players.json());
        this.players = players.json() as Player[];
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  getPlayerByIndex(index: number): Player {
    return this.players[index];
  }

  getPlayerByName(name: string): Player {
    return this.players.find({name: name}[0]);
  }
}
