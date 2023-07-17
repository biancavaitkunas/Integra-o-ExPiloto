import { HttpClient, HttpHeaders} from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public emitEventUser = new EventEmitter();

  public user!: User;

  public usersList: Array<User> = []

  constructor(private http: HttpClient) { }

  public submitUser(name: string, email: string, password: string, roles: string){
    this.usersList.push({name: name, email: email, password: password, roles: roles})
    this.emitEventUser.emit(this.usersList);
  }

  getUsers(): Observable<User[]> {
    let url = `http://localhost:8080/usuario`;
    return this.http.get<User[]>(url);
  }

  /*postUser(name: string, email: string, password: string, roles: string): Observable<User[]> {
    let url = `http://localhost:8080/usuario`;
    return this.http.post(url)
  }*/

  deleteUser(user: number): void {
    let url = `http://localhost:8080/usuario/${user}`;
    this.http.delete(url)
  }

  getUserByName(name: string): Observable<User[]> {
    let url = `http://localhost:8080/usuario/${name}`;
    return this.http.get<User[]>(url);
  }

  
}
