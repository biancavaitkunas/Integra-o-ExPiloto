import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Championship } from '../models/championship';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipServiceService {

  public emitEventChampionship = new EventEmitter();

  public championship!: Championship;

  constructor(private http: HttpClient) {}

  public urlBase = `http://localhost:8080/campeonato`;
  private championshipsSubject = new Subject<Championship[]>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),}; //diz que o tipo será json, content type fica dentro de headers no postman

  public insert(championship: Championship): Observable<Championship> {
    return this.http.post<Championship>(this.urlBase, JSON.stringify(championship), this.httpOptions).pipe(
        tap(() => {
          this.getChampionships();
        })
      );
  }

  public getChampionships(): Observable<Championship[]> {
    this.http
      .get<Championship[]>(this.urlBase)
      .subscribe((championships) => this.championshipsSubject.next(championships));
    return this.championshipsSubject.asObservable();
  }

  public deleteChampionship(championship: Championship): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${championship.id}`);
  }

  public getChampionshipByName(name: string): Observable<Championship[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<Championship[]>(url)
      .subscribe((championships) => this.championshipsSubject.next(championships));
    return this.championshipsSubject.asObservable();
  }

  public getChampionshipsByYear(year: number): Observable<Championship[]> {
    let url = `${this.urlBase}/ano/${year}`;
    this.http
      .get<Championship[]>(url)
      .subscribe((championships) => this.championshipsSubject.next(championships));
    return this.championshipsSubject.asObservable();
  }

  public getChampionshipsByYearBetween(inicialYear: number, finalYear: number): Observable<Championship[]> {
    let url = `${this.urlBase}/anos/${inicialYear}/${finalYear}`;
    this.http
      .get<Championship[]>(url)
      .subscribe((championships) => this.championshipsSubject.next(championships));
    return this.championshipsSubject.asObservable();
  }

  public editChampionship(championship: Championship) {
    this.emitEventChampionship.emit(championship);
  }
}
