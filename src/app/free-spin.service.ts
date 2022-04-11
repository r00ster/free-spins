import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FreeSpin } from './free-spins/free-spin';

@Injectable({
  providedIn: 'root'
})
export class FreeSpinService {

  constructor(private httpClient: HttpClient) { }

  getFreeSpinData(): Observable<FreeSpin[]> {
    const json = '../assets/json/free-spin-data.json';
    return this.httpClient.get(json)
      .pipe(map(data => data as FreeSpin[]));
  }
}
