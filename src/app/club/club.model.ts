import {Player} from '../player/player.model';

export interface Club {

  _id: string;

  city: string;

  name: string;

  players: Player[];

  stadium: string;

  getCity(): string;

  getName(): string;

  getPlayers(): Player[];

  getStadium(): string;
}
