import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  public token: string = 'Bearer ';

  public getToken(email: string, senha: string): Observable<string> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json',
    };
    let url = `http://localhost:8080/auth/token`;
    let userLogin = {
      email: email,
      password: senha,
    };
    return this.http.post<string>(url, userLogin, httpOptions).pipe(
      tap((data) => {
        this.token += data;
      })
    );
  }

}






/*constructor(private http: HttpClient) { }

  public token: string = 'Bearer ';

  public getToken(email: string, password: string): Observable<String>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };
    let url = "http://localhost:8080/auth/token";
    let userLogin = {
      email: email,
      password: password
    }
    return this.http.post<string>(url, userLogin, httpOptions).pipe(
      tap((data) =>{
        this.token += data;
      })
    )
  }
  
OnInit OBTER O TOKEN:
ngOnInit(): void {
    this.globalService.getToken('usuario1@gmail.com','123').subscribe(()=>{
      this.service.listAll().subscribe((data) => {
        this.users = data;
      });
    });
  }
  
listAll - passar token
public listAll(): Observable<User[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.globalService.token
      }),
    };
    this.http.get<User[]>(this.urlBase, httpOptions)
      .subscribe((users) => {
        this.usersSubject.next(users)
      });
    return this.usersSubject.asObservable();
  }*/
