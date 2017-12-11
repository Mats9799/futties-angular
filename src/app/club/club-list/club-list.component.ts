import { Component, OnInit } from '@angular/core';
import {ClubService} from "../club.service";
import {Observable} from "rxjs/Observable";
import {Club} from "../club.model";

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  private clubs: Club[] = [];
  private clubsChanged = new Observable<Club[]>();
  private clubService: ClubService;

  constructor(clubService: ClubService) {
    this.clubService = clubService;

    this.clubsChanged = new Observable(observer => {
      clubService.getClubs().then(() => {
        observer.complete();
      });
    });
  }

  ngOnInit() {
    this.clubService.getClubs()
      .then((clubs) => {
        this.clubs = clubs;
        console.log(this.clubs);
      })
      .catch(error => console.log(error));
  }
}
