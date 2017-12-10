import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Player} from './player.model';
import {Observable} from "rxjs/Observable";
import {PlayerService} from "./player.service";
import {Injectable} from "@angular/core";

@Injectable()
export class PlayerResolver implements Resolve<Player[]> {

  constructor(private playerService: PlayerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player[]> | Promise<Player[]> | Player[] {
    return this.playerService.getPlayers();
  }
}
