import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { END_POINT } from './api-registry';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private api: ApiService) { }

  tournamentRegistration(data: any) {
    this.api.post([END_POINT.tournaments], data);
  }

  get() {
    let url = [END_POINT.tournaments];
    return this.api.get(url);
  }
}
