import { Speedway } from '../models/speedways';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from 'src/app/countries/models/country';
import { CountryServiceService } from 'src/app/countries/services/country-service.service';

@Injectable({
  providedIn: 'root'
})
export class SpeedwayServiceService{

  public emitEventSpeedway = new EventEmitter();

  public speedway!: Speedway;

  constructor(private http: HttpClient) {}

  public urlBase = `http://localhost:8080/pista`;
  private speedwaysSubject = new Subject<Speedway[]>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }; //diz que o tipo será json, content type fica dentro de headers no postman

  public insert(speedway: Speedway): Observable<Speedway> {
    return this.http.post<Speedway>(this.urlBase, JSON.stringify(speedway), this.httpOptions).pipe(
        tap(() => {
          this.getSpeedways();
        })
      );
  }

  getSpeedways(): Observable<Speedway[]> {
    this.http
      .get<Speedway[]>(this.urlBase)
      .subscribe((speedway) => this.speedwaysSubject.next(speedway));
    return this.speedwaysSubject.asObservable();
  }

  deleteSpeedway(speedway: Speedway): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${speedway.id}`);
  }

  getSpeedwaysByName(name: string): Observable<Speedway[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<Speedway[]>(url)
      .subscribe((speedway) => this.speedwaysSubject.next(speedway));
    return this.speedwaysSubject.asObservable();
  }

  public editSpeedway(speedway: Speedway) {
    this.emitEventSpeedway.emit(speedway);
  }

}
