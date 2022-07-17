import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { DataChart } from '../models/data-chart.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = 'https://sds1-tyandrer.herokuapp.com/games';

  constructor(private http: HttpClient) { }

  read(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl);
  }
}
