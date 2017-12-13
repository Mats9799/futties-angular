import {Player} from "../player/player.model";

export interface Team {

  _id: string;

  name: string;

  players: Player[];
}
