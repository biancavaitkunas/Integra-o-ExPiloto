import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Team } from '../models/teams';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public emitEventCountry = new EventEmitter();

  public team!: Team;

  constructor(private http: HttpClient) {}

  public urlBase = `http://localhost:8080/equipe`;
  private teamsSubject = new Subject<Team[]>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),}; //diz que o tipo será json, content type fica dentro de headers no postman

  public insert(team: Team): Observable<Team> {
    return this.http.post<Team>(this.urlBase, JSON.stringify(team), this.httpOptions).pipe(
        tap(() => {
          this.getTeams();
        })
      );
  }

  getTeams(): Observable<Team[]> {
    this.http
      .get<Team[]>(this.urlBase)
      .subscribe((teams) => this.teamsSubject.next(teams));
    return this.teamsSubject.asObservable();
  }

  deleteTeam(team: Team): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${team.id}`);
  }

  getTeamByName(name: string): Observable<Team[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<Team[]>(url)
      .subscribe((teams) => this.teamsSubject.next(teams));
    return this.teamsSubject.asObservable();
  }

  public editTeam(team: Team) {
    this.emitEventCountry.emit(team);
  }
}
