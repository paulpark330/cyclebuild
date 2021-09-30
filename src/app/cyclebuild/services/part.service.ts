import { Injectable } from '@angular/core';
import { Part } from '../models/part';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PartService {
  private _parts: BehaviorSubject<Part[]>;
  private dataStore: { parts: Part[] };

  constructor(private http: HttpClient) {
    this.dataStore = { parts: [] };
    this._parts = new BehaviorSubject<Part[]>([]);
  }

  get parts(): Observable<Part[]> {
    return this._parts.asObservable();
  }

  partById(id: string) {
    return this.dataStore.parts.find(x => x._id == id)
  }

  loadAll() {
    const partsUrl = 'http://localhost:3000/part';
    return this.http.get<Part[]>(partsUrl).subscribe((data) => {
      this.dataStore.parts = data;
      this._parts.next(Object.assign({}, this.dataStore).parts)
    },
    (error) => {
      console.log('Failed to fetch parts')
    }
    );
  }
}
