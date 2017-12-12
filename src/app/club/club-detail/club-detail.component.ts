import {Component, Input} from '@angular/core';
import {Club} from "../club.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent {

  @Input() club: Club;

  constructor(private route: ActivatedRoute, private router: Router) { }

  onListPlayers(): void {
    this.router.navigate([this.club._id], {relativeTo: this.route});
  }
}
