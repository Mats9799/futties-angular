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

  addPlayer(player: Player): Promise<Player> {
    this.players.push(player);

    console.log('Speler toevoegen: ' + player.name);
    return this.http.post(this.serverUrl,
      {
        name: player.name,
        age: player.age,
        country: player.country,
        height: player.height,
        position: player.position,
        headers: this.headers
      })
      .toPromise()
      .then(response => {
        console.log(response.json() as Player);
        return response.json() as Player;
      })
      .catch(error => {
        console.log(error);
        return null;
      });
  }

  deletePlayer(player: Player): Promise<Player> {
    this.players.splice(this.players.indexOf(player), 1);

    console.log('Speler verwijderen: ' + player.name);
    return this.http.delete(this.serverUrl + '/' + player._id)
      .toPromise()
      .then(response => {
        return response.json() as Player;
      })
      .catch(error => {
        console.log(error);
        return null;
      });
  }

  public getPlayers(): Promise<Player[]> {
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

  getPlayerById(id: string): Player {
    return this.players.find(p => p._id === id);
  }

  getPlayerByName(name: string): Player {
    return this.players.find(p => p.name === name);
  }

  updatePlayer(player: Player): Promise<Player> {
    console.log('Speler updaten: ' + player.name);
    return this.http.put(this.serverUrl + '/' + player._id, {
      name: player.name,
      age: player.age,
      country: player.country,
      height: player.height,
      position: player.position,
      headers: this.headers
    })
      .toPromise()
      .then(response => {
        return response.json() as Player;
      })
      .catch(error => {
        console.log(error);
        return null;
      });
  }
}
