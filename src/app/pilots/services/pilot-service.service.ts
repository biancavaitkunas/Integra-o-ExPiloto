import { EventEmitter, Injectable } from '@angular/core';
import { Pilot } from '../models/pilots';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Country } from 'src/app/countries/models/country';
import { Team } from 'src/app/teams/models/teams';

@Injectable({
  providedIn: 'root'
})
export class PilotServiceService {

  public emitEventPilot = new EventEmitter();

  public pilot!: Pilot;

  constructor(private http: HttpClient) {}

  public urlBase = `http://localhost:8080/piloto`;
  private pilotsSubject = new Subject<Pilot[]>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }; 

  public insert(pilot: Pilot): Observable<Pilot> {
    return this.http.post<Pilot>(this.urlBase, JSON.stringify(pilot), this.httpOptions).pipe(
        tap(() => {
          this.getPilots();
        })
      );
  }

  getPilots(): Observable<Pilot[]> {
    this.http
      .get<Pilot[]>(this.urlBase)
      .subscribe((pilot) => this.pilotsSubject.next(pilot));
    return this.pilotsSubject.asObservable();
  }

  deletePilot(pilot: Pilot): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${pilot.id}`);
  }

  getPilotByName(name: string): Observable<Pilot[]> {
    let url = `${this.urlBase}/nome/${name}`;
    this.http
      .get<Pilot[]>(url)
      .subscribe((race) => this.pilotsSubject.next(race));
    return this.pilotsSubject.asObservable();
  }

  getPilotByCountry(country: Country): Observable<Pilot[]> {
    let url = `${this.urlBase}/pais/${country.id}`;
    this.http
      .get<Pilot[]>(url)
      .subscribe((race) => this.pilotsSubject.next(race));
    return this.pilotsSubject.asObservable();
  }

  getPilotByTeam(team: Team): Observable<Pilot[]> {
    let url = `${this.urlBase}/equipe/${team.id}`;
    this.http
      .get<Pilot[]>(url)
      .subscribe((race) => this.pilotsSubject.next(race));
    return this.pilotsSubject.asObservable();
  }

  public editPilot(pilot: Pilot) {
    this.emitEventPilot.emit(pilot);
  }

}
