import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  public token: string = '';

  public getToken(email: string, senha: string){
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}), responseType: 'text' as 'json'
    }
    let url = `http://localhost:8080/auth/token`;
    let userLogin = {
      email:email,
      password:senha
    }
    this.http.post<string>(url, userLogin, httpOptions).subscribe((data)=> {this.token += data});
    //return new Observable - usar pipe igual do insert - map

  }
}
