import {Component, Input} from '@angular/core';

import {Player} from '../player.model';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {

  @Input() player: Player;

  constructor(private route: ActivatedRoute, private router: Router) { }

  onEdit() {
    this.router.navigate([this.player._id + '/edit'], {relativeTo: this.route});
  }

  onSign(): void {

  }
}
