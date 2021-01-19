import { Responsavel } from './../model/Responsavel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/User';
import { URL_SERVIDOR } from '../utilities/constants';

@Injectable({
  providedIn: 'root'
})
export class GestaoService {

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  private atualizarAtividadesSubject = new Subject();
  public atualizarAtividadesObservable = this.atualizarAtividadesSubject.asObservable();

  usuario: string;
  //const KEY = 'currentUser';

  // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  // this.currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    /*this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();*/
  }

  atualizarAtividades(){
    this.atualizarAtividadesSubject.next();
  }
   
   /*public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }*/

  login(login: string, senha: string) {
    return this.http.post<any>(`${URL_SERVIDOR}` + `login`, { login, senha })
        .pipe(map(user => {
          // login successful if there's a jwt token in the response
            if (user) {
              // store u ser details and jwt token in local storage to keep user logged in between page refreshes
              window.localStorage.setItem('currentUser', JSON.stringify(user));
              this.atualizarAtividades();
              // this.currentUserSubject.next(user);
            }
            return user;
        }));
  }
  listarResponsaveis(){
    return this.http.get<Responsavel>(`${URL_SERVIDOR}responsavel/listar_responsaveis/`);
  }

  listarAtividades(cdPessoa: number): Observable<any> {
    const params = new HttpParams().set('cdPessoa', cdPessoa.toString());
    return this.http.get<Responsavel>(`${URL_SERVIDOR}atividade/responsavel`, {
      params
    });
  }

}
