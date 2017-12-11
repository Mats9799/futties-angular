import {Club} from './club.model';
import {Player} from '../player/player.model';

export class FuttiesClub implements Club {

  public _id: string;
  public city: string;
  public name: string;
  public players: Player[];
  public stadium: string;

  constructor(name: string, city: string, stadium: string, ...players: Player[]) {
    this.name = name;
    this.city = city;
    this.stadium = stadium;
    this.players = players;
  }

  getCity(): string {
    return this.city;
  }

  getName(): string {
    return this.name;
  }

  getPlayers(): Player[] {
    return this.players;
  }

  getStadium(): string {
    return this.stadium;
  }
}
