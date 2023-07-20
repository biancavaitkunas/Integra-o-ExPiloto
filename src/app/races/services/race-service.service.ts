import { EventEmitter, Injectable } from '@angular/core';
import { Race } from '../models/races';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceServiceService {

  public emitEventRace = new EventEmitter();

  public race!: Race;

  constructor(private http: HttpClient) {}

  public urlBase = `http://localhost:8080/corrida`;
  private racesSubject = new Subject<Race[]>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }; 

  public insert(race: Race): Observable<Race> {
    return this.http.post<Race>(this.urlBase, JSON.stringify(race), this.httpOptions).pipe(
        tap(() => {
          this.getRaces();
        })
      );
  }

  getRaces(): Observable<Race[]> {
    this.http
      .get<Race[]>(this.urlBase)
      .subscribe((race) => this.racesSubject.next(race));
    return this.racesSubject.asObservable();
  }

  deleteRace(race: Race): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${race.id}`);
  }

  getRacesByName(name: string): Observable<Race[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<Race[]>(url)
      .subscribe((race) => this.racesSubject.next(race));
    return this.racesSubject.asObservable();
  }

  public editRace(race: Race) {
    this.emitEventRace.emit(race);
  }

}
