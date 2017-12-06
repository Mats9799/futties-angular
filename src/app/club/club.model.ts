import {Player} from '../player/player.model';

export interface Club {

  getCity(): string;

  getName(): string;

  getPlayers(): Player[];

  getStadium(): string;
}
