import {environment} from '../../environments/environment.prod';
import {Http, Headers} from '@angular/http';

import {Club} from './club.model';
import {Injectable} from '@angular/core';
import {FuttiesClub} from './futtiesclub.model';

@Injectable()
export class ClubService {

  private clubs: Club[];
  private headers: Headers;
  private serverUrl: string;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.serverUrl = environment.serverUrl + '/clubs';
  }

  // Het ophalen van bestaande clubs uit de database
  fetchClubs(): void {
    this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(clubs => {
        console.log(clubs.json());
        this.clubs = clubs.json() as FuttiesClub[];
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  public getClubByIndex(index: number): Club {
    return this.clubs[index];
  }

  public getClubByName(name: string): Club {
    return this.clubs.find({name: name}[0]);
  }

  public getClubs(): Club[] {
    return this.clubs;
  }
}
