import {environment} from '../../environments/environment.prod';
import {Http, Headers} from '@angular/http';

import {Club} from './club.model';
import {Injectable} from '@angular/core';
import {FuttiesClub} from './futtiesclub.model';

@Injectable()
export class ClubService {

  private clubs: Club[];
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/clubs';

  constructor(private http: Http) { }

  public getClubById(id: string): Club {
    console.log(id);
    console.log(this.clubs.find(c => c._id === id));
    return this.clubs.find(c => c._id === id);
  }

  public getClubs(): Promise<FuttiesClub[]> {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.clubs = response.json() as FuttiesClub[];
        return response.json() as FuttiesClub[];
      })
      .catch(error => {
        return FuttiesClub[0];
      });
  }
}
