import { Injectable } from '@angular/core';
import { END_POINT } from './api-registry';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private apiService: ApiService) {}

  get(tournament_id) {
    let url = [`${END_POINT.matches}/show/${tournament_id}`];
    return this.apiService.get(url);
  }

  getNextMatch() {
    return this.apiService.get([`${END_POINT.matches}/next-match`]);
  }
}
