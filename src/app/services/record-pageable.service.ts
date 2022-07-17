import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordPageable } from '../models/record-pageable.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordPageableService {

  baseUrl = 'https://sds1-tyandrer.herokuapp.com/records';

  constructor(private http: HttpClient) { }

  read(options?: {linesPerPage: number, page: number}): Observable<RecordPageable> {
    
    if (!options) {
      return this.http.get<RecordPageable>(this.baseUrl);
    }

    return this.http.get<RecordPageable>(
      `${this.baseUrl}?linesPerPage=${options.linesPerPage}&page=${options.page}`
    );
  }
}
