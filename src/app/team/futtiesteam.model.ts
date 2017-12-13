import {Team} from "./team.model";
import {Player} from "../player/player.model";

export class FuttiesTeam implements Team {

  public _id: string;
  public name: string;
  public players: Player[];

  constructor(name: string, ...players: Player[]) {
    this.name = name;
    this.players = players;
  }
}
