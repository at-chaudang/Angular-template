import { Injectable } from '@angular/core';
import { END_POINT } from 'src/app/shared/services/api-registry';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private apiService: ApiService) { }

  get(schedule_id) {
    let url = [`${END_POINT.matches}/tournament/${schedule_id}`];
    return this.apiService.get(url);
  }

  getTopTeams(tournamentId) {
    let url = [`${END_POINT.matches}/showTopTeams/${tournamentId}`];
    return this.apiService.get(url);
  }
}
