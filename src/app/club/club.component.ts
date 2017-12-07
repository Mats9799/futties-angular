import { Component, OnInit } from '@angular/core';
import {ClubService} from './club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  private clubService: ClubService;

  constructor(clubService: ClubService) {
    this.clubService = clubService;
  }

  ngOnInit() {
    this.clubService.fetchClubs();
  }
}
