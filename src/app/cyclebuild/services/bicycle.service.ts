import { Injectable } from '@angular/core';
import { Bicycle } from '../models/bicycle';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BicycleService {
  private _bicycles: BehaviorSubject<Bicycle[]>;
  private dataStore: { bicycles: Bicycle[] };

  constructor(private http: HttpClient) {
    this.dataStore = { bicycles: [] };
    this._bicycles = new BehaviorSubject<Bicycle[]>([]);
  }

  get bicycles(): Observable<Bicycle[]> {
    return this._bicycles.asObservable();
  }

  loadAll() {
    const bicyclesUrl = 'http://localhost:3000/bicycle';
    return this.http.get<Bicycle[]>(bicyclesUrl).subscribe(
      (data) => {
        this.dataStore.bicycles = data;
        this._bicycles.next(Object.assign({}, this.dataStore).bicycles);
      },
      (error) => {
        console.log('Failed to fetch bicycles');
      }
    );
  }
}
