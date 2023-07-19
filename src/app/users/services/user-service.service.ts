import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { GlobalService } from 'src/app/global.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  public emitEventUser = new EventEmitter();
  public updateEvent = new EventEmitter();

  public user!: User;

  constructor(private http: HttpClient, private globalService: GlobalService) {}

  public urlBase = `http://localhost:8080/usuario`;
  private usersSubject = new Subject<User[]>();

  /*private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };*/ //diz que o tipo será json, content type fica dentro de headers no postman

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'json',
  };

  public insert(user: User, token: string): Observable<User> {
    return this.http
      .post<User>(this.urlBase, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(() => {
          this.getUsers();
        })
      );
  }

  private getToken() {
    this.globalService.getToken("usuario4@gmail.com", "senha");
    console.log(this.globalService.token)
  }

  getUsers(): Observable<User[]> {

    //getToken(.subscribe)
    this.getToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.globalService.token
      }),
    };
    this.http
      .get<User[]>(this.urlBase, httpOptions)
      .subscribe((users) => this.usersSubject.next(users));
    return this.usersSubject.asObservable();
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${user.id}`);
  }

  getUserByName(name: string): Observable<User[]> {
    let url = `${this.urlBase}/name/${name}`;
    this.http
      .get<User[]>(url)
      .subscribe((users) => this.usersSubject.next(users));
    return this.usersSubject.asObservable();
  }

  public editUser(user: User) {
    this.emitEventUser.emit(user);
  }
}
