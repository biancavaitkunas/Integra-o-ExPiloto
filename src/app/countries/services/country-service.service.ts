import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  
  public emitEventCountry = new EventEmitter();

  public country!: Country;

  constructor(private http: HttpClient) {}

  public countriesList!: Country[];

  public urlBase = `http://localhost:8080/pais`;
  private countriesSubject = new Subject<Country[]>();
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),}; //diz que o tipo será json, content type fica dentro de headers no postman

  public insert(country: Country): Observable<Country> {
    //this.countriesList.push(country);
    return this.http.post<Country>(this.urlBase, JSON.stringify(country), this.httpOptions).pipe(
        tap(() => {
          this.getCountries();
        })
      );
     
  }

  getCountries(): Observable<Country[]> {
    this.http
      .get<Country[]>(this.urlBase)
      .subscribe((countries) => this.countriesSubject.next(countries));
    return this.countriesSubject.asObservable();
  }

  deleteCountry(country: Country): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${country.id}`);
  }

  getCountryByName(name: string): Observable<Country[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<Country[]>(url)
      .subscribe((users) => this.countriesSubject.next(users));
    return this.countriesSubject.asObservable();
  }

  public editCountry(country: Country) {
    this.emitEventCountry.emit(country);
  }
}
